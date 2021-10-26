import { writable } from 'svelte/store'
import type { Readable } from 'svelte/store'

import type { Guild } from './types'

import kuistiLogo from './kuisti.webp'
import upantoriLogo from './upantori.webp'

export interface State {
  openGuild: number
  guilds: Guild[]
}


const array = {
  update: <T>(items: T[], predicate: (item: T) => boolean, updater: (item: T) => T): T[] => {
    const updated = []
    const same = []

    for (const item of items)
      predicate(item)
        ? updated.push(updater(item))
        : same.push(item)
    
    return [...updated, ...same]
  }
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

interface StateWritable {
  setActiveChannel: (id: number) => void
  setActiveGuild: (id: number) => void
}

function createState(): Readable<State> & StateWritable {
  const { subscribe, set, update } = writable<State>(intitialState)

  function setActiveGuild(id: number): void {
    update(state => ({
      ...state,
      openGuild: id
    }))
  }

  function setActiveChannel(id: number): void {
    update(state => ({
      ...state,
      guilds: array.update(state.guilds, guild => guild.id === state.openGuild, guild => ({
        ...guild,
        openTextChannel: id
      }))
    }))
  }

  return {
    subscribe,
    setActiveGuild,
    setActiveChannel
  }
} 

export const state = createState()
