import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/theme";

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 480px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  margin: 0 0 32px;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: ${theme.spacing.xl} 48px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};

  @media (max-width: 768px) {
    padding: ${theme.spacing.lg};
  }
`;

const Heading = styled.h1`
  font-family: ${theme.typography.fontFamilyHeading};
  font-size: 48px;
  font-weight: ${theme.typography.fontWeightBold};
  color: ${theme.colors.primary};
  line-height: 1.1;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-family: ${theme.typography.fontFamilyBody};
  font-size: ${theme.typography.fontSizeMedium};
  color: ${theme.colors.primary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: ${theme.typography.fontSizeBase};
  }
`;

export const WelcomeSection = () => (
  <Section>
    <Image
      src="/images/welcome.avif"
      alt="Welcome"
      fill
      style={{ objectFit: "cover", objectPosition: "center" }}
      priority
    />
    <Content>
      <Heading>Columbus shop</Heading>
      <Subtitle>Top brands, exclusive deals — all in one place.</Subtitle>
    </Content>
  </Section>
);
