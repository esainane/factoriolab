import { SelectItem } from 'primeng/api';

import { GameInfo } from '../game-info';

export enum LinkValue {
  None = 0,
  Percent = 1,
  Items = 2,
  Belts = 3,
  Wagons = 4,
  Machines = 5,
}

export function linkValueOptions(gameInfo: GameInfo): SelectItem<LinkValue>[] {
  const result: SelectItem<LinkValue>[] = [
    { label: 'options.linkValue.none', value: LinkValue.None },
    { label: 'options.linkValue.percent', value: LinkValue.Percent },
    { label: 'options.linkValue.items', value: LinkValue.Items },
    { label: 'options.linkValue.belts', value: LinkValue.Belts },
    { label: 'options.linkValue.wagons', value: LinkValue.Wagons },
    { label: 'options.linkValue.machines', value: LinkValue.Machines },
  ];

  if (!gameInfo.flags.has('wagons'))
    return result.filter((i) => i.value !== LinkValue.Wagons);

  return result;
}
