import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const blinkOnPage = (id: string) => {

}

export default function Home() {
  return (
    <main
      id="holder"
      className={`grid h-screen place-items-center p-24 ${inter.className}`}
    >
      <div id="seal">
        <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⢶⡋⠉⣽⠲⠤⣄</p>
        <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠙⠓⠃⠀⠀⣰⡴⠏</p>
        <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠁⠀⠀⠀⢠⠎⠁⠀⠀</p>
        <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⠀⠀⠀⠀⠀⡜⠀⠀⠀⠀</p>
        <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀</p>
        <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡸⠁⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀</p>
        <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⢁⡄⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀</p>
        <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⠁⡞⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀</p>
        <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠞⠁⠀⡇⠀⠀⠀⠀⠀⠀⢰⡇⠀⠀⠀⠀</p>
        <p>⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠞⠁⠀⠀⢠⠃⠀⠀⢸⠀⠀⢠⢯⠇⠀⠀⠀⠀</p>
        <p>⠀⠀⠀⠀⢀⣠⠴⠚⠁⠀⠀⠀⠀⡠⠋⠀⠀⠀⡸⢀⡴⠋⢸⠀⠀⠀⠀⠀</p>
        <p>⠀⢀⡠⠖⠉⠀⠀⠀⠀⠀⠀⢀⡾⢔⡋⠀⢀⡴⠛⠁⢧⡀⠈⠓⢤⡀⠀⠀</p>
        <p>⣴⣋⠀⠀⢠⣆⣀⡠⠤⠤⠔⠻⠯⠭⠴⠒⠉⠀⠀⠀⠀⠈⠉⠉⠉⠁⠀⠀</p>
        <p>⠉⢹⡀⠀⠀⡩⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
        <p>⠀⠀⠳⢤⣙⣾⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
      </div>
    </main>
  )
}
