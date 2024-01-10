import { GridWrapper } from "@worms/common/GridWrapper";
import {
  ContactItem,
  ContactItemMobile,
  ContactStyled,
  ImageStyled,
  LogoStyled,
  NavigationContentStyled,
  NavigationStyled,
  SvgStyled,
} from "./styled";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { Logo, Mail, Phone } from "@worms/assets";
import { useWindowSize } from "@worms/hooks/useWindowSize";
import { SvgIcon } from "@worms/common/SvgIcon";

export const Navigation = () => {
  const { isMobileView } = useWindowSize();

  return (
    <>
      <NavigationStyled>
        <GridWrapper>
          <NavigationContentStyled>
            <LogoStyled>
              <ImageStyled src={Logo} />
            </LogoStyled>

            <FlexWrapper gap="48px" alignItems="center">
              {!isMobileView ? (
                <ContactStyled>
                  <ContactItem href="tel:+375297145127">
                    <SvgStyled src={Phone} />
                    +375 (29) 714-51-27
                  </ContactItem>

                  <ContactItem href="mailto:test-email@gmail.com">
                    <SvgStyled src={Mail} />
                    test-email@gmail.com
                  </ContactItem>
                </ContactStyled>
              ) : (
                <ContactStyled>
                  <ContactItemMobile href="tel:+375297145127">
                    <SvgIcon
                      width="20px"
                      height="20px"
                      fill="#fff"
                      iconSrc={Phone}
                    />
                  </ContactItemMobile>
                </ContactStyled>
              )}
            </FlexWrapper>
          </NavigationContentStyled>
        </GridWrapper>
      </NavigationStyled>
    </>
  );
};
