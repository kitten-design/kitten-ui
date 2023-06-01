import { Button } from '@kitten-ui/core';
import { update } from '@kitten-ui/styles';

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
