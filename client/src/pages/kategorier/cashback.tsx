import Wrapper from "../../hoc/Wrapper/Wrapper";
import Head from 'next/head';
import IntroText from "../../hoc/IntroText/IntroText";

export default () => {
  return <Wrapper name="Kreditkort med cashback">
    <Head>
      <title>Kreditkort med cashback</title>
    </Head>
    <IntroText
      title="Bästa kreditkorten med cashback"
      text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quaerat, culpa autem expedita corporis accusamus, dicta omnis provident, reiciendis tempora aspernatur numquam qui cumque nesciunt aliquam nam totam consequatur quas.
      Ratione, possimus facere commodi eligendi distinctio velit nobis praesentium aliquid harum quae. Laboriosam, porro. Id, consectetur optio ea itaque dolorum inventore illum reprehenderit iusto quisquam explicabo ipsa vitae, soluta autem."
    />
  </Wrapper>
}

