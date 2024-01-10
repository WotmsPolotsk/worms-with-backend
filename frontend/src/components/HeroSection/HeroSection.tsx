import { Separator } from "@worms/common/Separator";
import {
  BottomContent,
  ButtonStyled,
  HeroContentStyled,
  HeroSectionStyled,
  MaskStyled,
  SubtitleStyled,
  TitleStyled,
} from "./styled";
import { ModalForm } from "../ModalForm";
import { useState } from "react";

export const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (value: boolean) => () => {
    setIsModalOpen(value);
  };
  return (
    <>
      <Separator bgColor="#fff">
        <HeroSectionStyled>
          <BottomContent justifyContent="space-between" alignItems="flex-end">
            <HeroContentStyled>
              <SubtitleStyled>Полоцк</SubtitleStyled>
              <TitleStyled>
                Продажа и производство червей и биогумуса
              </TitleStyled>
            </HeroContentStyled>
            <ButtonStyled
              onClick={openModal(true)}
              className="hero-button"
              text="Получить обратный звонок"
            />
          </BottomContent>
          <MaskStyled />
        </HeroSectionStyled>
      </Separator>
      <ModalForm
        data={[{ label: "Запрос", value: "Обратный звонок" }]}
        isOpen={isModalOpen}
        onClose={openModal(false)}
      />
    </>
  );
};
