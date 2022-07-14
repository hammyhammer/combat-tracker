import Timer from '../components/Timer';
import { useState } from 'react';

export default function homepage() {
  const [timer, setTimer] = useState(0)

  return (
    <div>

      <Timer />
      homepage
    </div>
  )
}
