import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Atsufumi Suzuki</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>Lab Staff</HighlightAlt> FabLab,
        Kuriyama.
      </p>
      <p>
        I I love IoT so much!.
        I am using IoT technology to solve problems in agriculture and factories
      </p>
    </AboutWrapper>
  );
};

export default About;
