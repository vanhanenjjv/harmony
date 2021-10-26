export type VoiceChannel = 
  { type: 'voice'
    id: number 
    name: string }

export type TextChannel =
  { type: 'text' 
    id: number
    name: string }

export type Channel =
  | VoiceChannel
  | TextChannel

export type Guild = 
  { id: number
    name: string
    logo: string
    channels: Channel[] 
    openTextChannel: number }
