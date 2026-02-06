import HomeImage from "@/component/HomeImage/page"

export default function Home() {
    return(
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1>Hello</h1>
          <div>
            <h2>I'm Elakkiya Selvarajan</h2>
          </div>
          <h1>Front End Developer</h1>
        </div>
        <div >
          <HomeImage/>
        </div>
        </div>
    )
}