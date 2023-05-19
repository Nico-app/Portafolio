import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../../../../server/utils/types';
import Contact from '../../atoms/contact';
import Gilada from '../../molecules/gilada';
import Menu from '../../atoms/menu';
import Projects from '../../molecules/projects';
import Resume from '../../molecules/resume';
import './styles.scss';

export type Route = 'Resume' | 'Projects' | 'Contact';

const contents: Record<Route, () => JSX.Element> = {
  Resume,
  Projects,
  Contact,
};

const Portfolio = () => {
  const { userName } = useParams();
  const [content, setcontent] = useState<Route>('Contact');
  const [profile, setProfile] = useState<User>();

  const changeRoute = (newRoute: Route) => {
    setcontent(newRoute);
  };

  // useEffect(() => {
  //   (async () => {
  //     const response = await searchProduct(id!);
  //     setSearchDetails(response);
  //   })();
  // }, []);

  // if (!searchDeails) {
  //   return <p>Loading</p>;
  // }

  return (
    <div className="portfolio">
      <Menu changeRoute={changeRoute} />
      <div className="portfolio__change">
        <Gilada />
        <div className="app__content">{contents[content]()}</div>
      </div>
    </div>
  );
};

export default Portfolio;