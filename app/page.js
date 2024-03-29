import Header from "../components/Header"
import ContentBox1 from "../components/ContentBox1"
import ContentBox2 from "../components/ContentBox2"
import ContentBox3 from "../components/ContentBox3"
import ContentBox4 from "../components/ContentBox4"
import ContentBox5 from "../components/ContentBox5"
import ContentBox6 from "../components/ContentBox6"
import Footer from "../components/Footer"
import WhatsappButton from "../components/WhatsappButton"

export default function Home() {
  return (
    <main className="flex flex-col">
      <WhatsappButton></WhatsappButton>
      <Header></Header>
      <ContentBox1></ContentBox1>
      <ContentBox2></ContentBox2>
      <ContentBox3></ContentBox3>
      <ContentBox4></ContentBox4>
      <ContentBox5></ContentBox5>
      <ContentBox6></ContentBox6>
      <Footer></Footer>
    </main>
  )
}
