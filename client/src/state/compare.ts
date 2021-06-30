import { useState } from 'react';
import { createContainer } from "unstated-next"

function useCustomHook() {
  let [compareIds, setCompareIds] = useState<string[]>([]);
  const addToCompare = (id : string) => {
    const Ids = [...compareIds];
    const exists = Ids.find(compareId => compareId === id);
    if (exists) return null;
    
    Ids.push(id);

    setCompareIds(Ids)

    return Ids;
  }

  const removeFromCompare = (id : string) => {
    const Ids : string[] = [...compareIds];

    const index = Ids.findIndex(compareIds => compareIds === id);

    if(index < 0) return null;

    Ids.splice(index, 1);

    setCompareIds(Ids);

    return Ids;
  }

  const checkIfCardCompare = (id : string) => {
    const Ids : string[] = [...compareIds];

    return Ids.find(compareIds => compareIds === id);
  }
  return { compareIds, addToCompare, removeFromCompare, checkIfCardCompare}
}

let Container = createContainer(useCustomHook)

export default Container;