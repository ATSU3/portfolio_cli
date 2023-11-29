import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
    _   _
    / \ | |_ ___ _   _
   / _ \| __/ __| | | |
  / ___ \ |_\__ \ |_| |
 /_/   \_\__|___/\__,_|
 
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    _   _
    / \ | |_ ___ _   _
   / _ \| __/ __| | | |
  / ___ \ |_\__ \ |_| |
 /_/   \_\__|___/\__,_|
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.0.1)</div>
        <Seperator>----</Seperator>
        <div>
          {" "}
          <Link href="https://github.com/ATSU3">
            My GitHub Account
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                                                            
                  .:^~^^^:.                           
                  .~?5B#&@@@@@@#P!                         
                :?G&@@@@@@@@@@@@@@@B7                       
              .J&@@@@@@@@@@@@@@@@@@@@5                      
            7#@@@@@@@@@@@@@@@@@@@@@@@P                     
            J@@@@@@@@@@@@@@@@@@@@@@@@@@Y                    
          7@@#P@@@@@@@@@@@@@@@@@@@@@@@@~                   
          B@@~.B@@&#&@@@@@@@@@@@@@@@@@@5                   
          .#@P  5@&5BPG#@&@@#&&&@@@@@@@@G                   
          P@G  5BJ!!:^?J!J55JJYYYJPYJB#!                   
          :55^.~^^^^^^!Y!!~~~!^^^:^. ~!                    
          ~...?PJ.    .P.         :::^^                    
          ^^..!!.^.:::^^         ::^~!                     
            ..:7.                .^:~^                      
              ~^                .?.                        
                ~:              :!.                         
                ^^...        :~~.                          
                  :~.      :^~~.                            
                  .^^~~~~^^.                               
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
