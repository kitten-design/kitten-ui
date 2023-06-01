import { Button } from 'kitten-core';
import { update } from 'kitten-styles';

export default function KittenStyle() {
  return (
    <div className="w-screen h-screen text-red-800 text-lime-50">
      <Button
        onClick={() => {
          update();
        }}>
        123
      </Button>
    </div>
  );
}
