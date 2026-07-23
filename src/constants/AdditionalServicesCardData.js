import { ReactComponent as Drawing } from "../assets/icon/drawing.svg";
import { ReactComponent as Paper3 } from "../assets/icon/paper_3.svg";
import { ReactComponent as ContainerIcon } from "../assets/icon/container.svg";
import { ReactComponent as Helmet } from "../assets/icon/helmet.svg";
export const ADDITIONAL_SERVICES_CARD_DATA = [
  {
    icon: <Drawing/>,
    headerText: "Экспертная консультация",
    subHeaderText:
      "Спроектируем блок-контейнеры и \nмодульные здания под ваши задачи и \nтребования",
  },
  {
    icon: <Paper3/>,
    headerText: "Индивидуальное изготовление",
    subHeaderText:
      "Изготовливаем строго по вашему \n проекту и спецификациям на \n собственном производстве",
  },
  {
    icon: <ContainerIcon/>,
    headerText: "Доставка по всей России",
    subHeaderText:
      "Доставка по России, Москве и МО \n собственным автопарком на \n манипуляторе или длинномере",
  },
  {
    icon: <Helmet/>,
    headerText: "Оперативный монтаж",
    subHeaderText:
      "Монтаж блок-контейнеров и модульного \n здания на вашем объекте нашими силами \n за 24-72 часа",
  },
];
