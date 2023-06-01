import { Box, Button, Center, Text, Title } from 'kitten-core';
import { Fragment, useEffect, useRef } from 'react';
import { proxy, useSnapshot } from 'valtio';

export interface CountdownTimeDeltaOptions {
  readonly overtime?: boolean;
}

export interface CountdownTimeDelta {
  readonly total: number;
  readonly days: number;
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
  readonly milliseconds: number;
  readonly completed: boolean;
}

export interface CountdownTimeDeltaFormatted {
  readonly days: string;
  readonly hours: string;
  readonly minutes: string;
  readonly seconds: string;
}

export function zeroPad(value: number | string, length: number = 2): string {
  const strValue = String(value);
  if (length === 0) return strValue;
  const match = strValue.match(/(.*?)([0-9]+)(.*)/);
  const prefix = match ? match[1] : '';
  const suffix = match ? match[3] : '';
  const strNo = match ? match[2] : strValue;
  const paddedNo =
    strNo.length >= length
      ? strNo
      : ([...Array(length)].map(() => '0').join('') + strNo).slice(length * -1);
  return `${prefix}${paddedNo}${suffix}`;
}

export function calcTimeDelta(
  timeLeft: number,
  options: CountdownTimeDeltaOptions = {},
): CountdownTimeDelta {
  const { overtime } = options;
  const total = Math.round(
    parseFloat(
      ((overtime ? timeLeft : Math.max(0, timeLeft)) / 1000).toFixed(0),
    ) * 1000,
  );
  const seconds = Math.abs(total) / 1000;

  return {
    total,
    days: Math.floor(seconds / (3600 * 24)),
    hours: Math.floor((seconds / 3600) % 24),
    minutes: Math.floor((seconds / 60) % 60),
    seconds: Math.floor(seconds % 60),
    milliseconds: Number(((seconds % 1) * 1000).toFixed()),
    completed: total <= 0,
  };
}

export function formatTimeDelta(
  timeDelta: CountdownTimeDelta,
): CountdownTimeDeltaFormatted {
  const { days, hours, minutes, seconds } = timeDelta;

  return {
    days: zeroPad(days, 2),
    hours: zeroPad(hours, 2),
    minutes: zeroPad(minutes, 2),
    seconds: zeroPad(seconds, 2),
  };
}

export const Countdown = ({ index }: { index: number }) => {
  const snap = useSnapshot(store.todos[index]);
  const delta = calcTimeDelta(snap.timeLeft);
  const { days, hours, minutes, seconds } = formatTimeDelta(delta);
  return (
    <span className="countdown-time">
      {delta.total < 0 ? '-' : ''}
      {days}
      {days ? ':' : ''}
      {hours}:{minutes}:{seconds}
    </span>
  );
};
type Status = 'pending' | 'completed' | 'overdue';
type Filter = Status | 'all';
type Todo = {
  description: string;
  status: Status;
  id: number;
  timeLeft: number;
  timeout?: number;
};

export const store = proxy<{ filter: Filter; todos: Todo[] }>({
  filter: 'all',
  todos: [],
});

const countdown = (index: number) => {
  const todo = store.todos[index];
  // user removed todo case
  if (!todo) return;
  // todo done of overdue case
  if (todo.status !== 'pending' || store.todos[index].timeout) {
    return;
  }
  // time over
  if (todo.timeLeft < 1000) {
    todo.timeLeft = 0;
    todo.status = 'overdue';
    return;
  }
  store.todos[index].timeout = window.setTimeout(() => {
    todo.timeLeft -= 1000;
    store.todos[index].timeout = undefined;
    countdown(index);
  }, 1000);
};

// alternatively use controlled state with the store instead of the form ref
const addTodo = (e: React.SyntheticEvent, reset: VoidFunction) => {
  e.preventDefault();
  const target = e.target as typeof e.target & {
    deadline: { value: Date };
    description: { value: string };
  };
  const deadline = target.deadline.value;
  const description = target.description.value;
  const now = Date.now();
  store.todos.push({
    description,
    status: 'pending',
    id: now,
    timeLeft: new Date(deadline).getTime() - now,
  });
  reset();
  countdown(store.todos.length - 1);
};

const removeTodo = (index: number) => {
  store.todos.splice(index, 1);
};

const toggleDone = (index: number, currentStatus: Status) => {
  const nextStatus = currentStatus === 'pending' ? 'completed' : 'pending';
  store.todos[index].status = nextStatus;
  if (nextStatus === 'pending') {
    if (store.todos[index]?.timeout) {
      clearTimeout(store.todos[index]?.timeout);
      store.todos[index].timeout = undefined;
    }
    countdown(index);
  }
};

const setFilter = (filter: Filter) => {
  store.filter = filter;
};

const filterValues: Filter[] = ['all', 'pending', 'completed', 'overdue'];

const Filters = () => {
  const snap = useSnapshot(store);
  return (
    <nav className="m-2">
      {filterValues.map((filter) => (
        <Box as="span" className="mx-4 cursor-pointer select-none" key={filter}>
          <input
            name="filter"
            type="radio"
            id={filter}
            value={filter}
            checked={snap.filter === filter}
            onChange={() => setFilter(filter)}
          />
          <label htmlFor={filter}>{filter}</label>
        </Box>
      ))}
    </nav>
  );
};

const Todos = () => {
  const snap = useSnapshot(store);
  return (
    <Box as="ul">
      {snap.todos
        .filter(({ status }) => status === snap.filter || snap.filter === 'all')
        .map(({ description, status, id }, index) => {
          return (
            <Box
              as="li"
              key={id}
              className="flex items-center justify-between bg-gray-100 m-2 p-2">
              <Text
                data-status={status}
                className="description"
                onClick={() => toggleDone(index, status)}>
                {description}
              </Text>
              {status === 'overdue' && (
                <span className="overdue-message">overdue ⏱️</span>
              )}
              {status === 'pending' && <Countdown index={index} />}
              <Button.ActionIcon
                className="remove"
                onClick={() => removeTodo(index)}>
                x
              </Button.ActionIcon>
            </Box>
          );
        })}
    </Box>
  );
};

const CreateTodoForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const getDefaultDate = () => {
    let date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toISOString().substring(0, 11) + '12:00';
  };
  const reset = () => {
    if (formRef.current) {
      formRef.current.reset();
      formRef.current.deadline.value = getDefaultDate();
    }
  };
  // set default deadline to noon tomorrow
  useEffect(() => {
    if (formRef.current) {
      formRef.current.deadline.value = getDefaultDate();
    }
  }, []);

  return (
    <form
      className="bg-gray-100 p-2 m-2"
      onSubmit={(e) => addTodo(e, reset)}
      ref={formRef}>
      <Text>Todo</Text>
      <input name="description" type="text" minLength={2} />
      <br />
      <br />
      <Text>Deadline</Text>
      <input name="deadline" type="datetime-local" />
      <br />
      <br />
      <Button variant="outline" type="submit" className="add">
        Add new
      </Button>
    </form>
  );
};

const App = () => (
  <Center>
    <main className="w-[500px]">
      <Title order={1}>To-do 列表</Title>
      <Filters />
      <Todos />
      <CreateTodoForm />
    </main>
  </Center>
);

export default App;
