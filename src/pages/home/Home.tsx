
import Layout from "../../layout/Layout"
import Speakers from "../../components/homecomponent/SpeakerSection"
import Hero from "../../components/homecomponent/Hero"

function Home() {
  return (
    <Layout className=" flex flex-col w-full items-center bg-black">
      <Hero />
      <Speakers />
    </Layout>
  )
}

export default Home