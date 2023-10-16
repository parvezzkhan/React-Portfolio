import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiPython,
  DiCss3,
  DiDjango,
  DiWordpress,
} from 'react-icons/di';
import {
  SiRedux,
  SiDigitalocean,
  SiAmazonaws,
  SiChakraui,
  SiTailwindcss,
  SiBootstrap,
  SiMicrosoftsqlserver,
  SiMysql,
  SiNetlify,
  SiVercel,
} from 'react-icons/si';
import {
  AiFillHtml5,
  AiFillGithub,
  AiFillCode,
} from 'react-icons/ai';



const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <AiFillHtml5 />
      </li>
      <li className={s.techIcon}>
        <DiCss3/>
      </li>
      <li className={s.techIcon}>
        <SiTailwindcss/>
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <SiChakraui />
      </li>
      <li className={s.techIcon}>
        <SiBootstrap />
      </li>
      <li className={s.techIcon}>
        <DiDjango />
      </li>
      <li className={s.techIcon}>
        <DiPython />
      </li>
      <li className={s.techIcon}>
        <SiMicrosoftsqlserver />
      </li>
      <li className={s.techIcon}>
        <SiMysql />
      </li>
      <li className={s.techIcon}>
        <SiAmazonaws />
      </li>
      <li className={s.techIcon}>
        <SiNetlify />
      </li>
      <li className={s.techIcon}>
        <SiVercel />
      </li>
      <li className={s.techIcon}>
        <AiFillGithub />
      </li>
      <li className={s.techIcon}>
        <DiWordpress />
      </li>
      <li className={s.techIcon}>
        <SiDigitalocean />
      </li>
      <li className={s.techIcon}>
        <AiFillCode />
      </li>
    </ul>
  );
};

export default TechSkills;
