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
