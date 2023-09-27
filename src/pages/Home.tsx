import { ChevronUpIcon } from '@chakra-ui/icons';
import { Button, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Home() {
  /*** HOOKS ***/
  //Routing
  const navigate = useNavigate();

  /*** FUNCTIONALITIES ***/
  const navigateToComment = (ejercicio: number) => {
    if (document.startViewTransition) {
      const transition = document.startViewTransition(() => {
        ejercicio == 1
          ? navigate(`/WhoCouldYouBe`)
          : navigate(`/CovidChronicle`);
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          [
            { transform: 'translateY(100%)' },
            { transform: 'translateY(66%)' },
            { transform: 'translateY(33%)' },
            { transform: 'translateY(0px)' },
            { transform: 'translateY(10px)' },
            { transform: 'translateY(0px)' },
            { transform: 'translateY(5px)' },
            { transform: 'translateY(0)' },
          ],
          {
            duration: 800,
            easing: 'ease-in',
            pseudoElement: '::view-transition-new(root)',
          }
        );
      });
    } else {
      ejercicio == 1 ? navigate(`/WhoCouldYouBe`) : navigate(`/CovidChronicle`);
    }
  };

  return (
    <main className="home-container">
      <Heading as="h1" size="4xl" mt={200}>
        Technical Test
      </Heading>
      <Button className="home-button" onClick={() => navigateToComment(1)}>
        <ChevronUpIcon boxSize={10} />
        Who Could You Be (1)
      </Button>
      <Button className="home-button" onClick={() => navigateToComment(2)}>
        <ChevronUpIcon boxSize={10} />
        Covid Chronicle (2)
      </Button>
    </main>
  );
}

export default Home;
