import * as Chance from 'chance';
import * as devices from './useragent.json';

export function userAgentFactory(seed: string){
	const count   = Object.keys(devices).length;
	const chance  = new Chance(seed);
	const pick    = chance.integer({ min: 0, max: count });

	return devices[pick];
}
