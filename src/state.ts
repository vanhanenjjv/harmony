import { writable } from 'svelte/store'
import type {  Writable} from 'svelte/store'

import type { Guild } from './types'

import kuistiLogo from './kuisti.webp'
import upantoriLogo from './upantori.webp'

export interface State {
  openGuild: number
  guilds: Guild[]
}

const intitialState: State = {
  openGuild: 1,
  guilds: [
    { 
      id: 1, 
      name: 'Kuisti', 
      logo: kuistiLogo,
      channels: [
        { id: 3, type: 'voice', name: 'salmarikengät' },
        { id: 4, type: 'text', name: 'nutturannokka' }
      ],
      openTextChannel: 4
    },
    { 
      id: 2, 
      name: 'Upantori', 
      logo: upantoriLogo,
      channels: [
        { id: 5, type: 'voice', name: 'Sauna' },
        { id: 6, type: 'text', name: 'yleinen' }
      ],
      openTextChannel: 6
    }
  ]
}

function createState(): Writable<State> {
  const { subscribe, set, update } = writable<State>(intitialState)

  return {
    subscribe,
    set,
    update
  }
} 

export const state = createState()
