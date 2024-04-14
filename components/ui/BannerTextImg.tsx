import { FnContext, SectionProps } from "deco/mod.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { Temperature } from "apps/weather/loaders/temperature.ts";

export interface Img {
  /**@title Image Desktop*/
  imageDesktop?: ImageWidget;

  alt?: string;

  /** @description width ex: 500 */
  widthDesktop?: number;
  /** @description height ex: 300 */
  heightDesktop?: number;

  /**@title Image Mobile*/
  imageMobile: ImageWidget;
  /** @description width ex: 500 */
  widthMobile?: number;
  /** @description height ex: 300 */
  heightMobile?: number;
}

export interface TextList {
  /** @format html */
  descriptionList?: string;
}

export interface Tags {
  /**@title Tags Desktop*/
  iconsDesktop: ImageWidget;
  widthDesktop?: number;
  heightDesktop?: number;

  /**@title Tags Mobile*/
  iconsMobile: ImageWidget;
  widthMobile?: number;
  heightMobile?: number;
}

export interface CardInfo {
  /**@description ex: +12,85% */
  percentage?: string;

  /**@description short text ex: Aumento da receita */
  about?: string;
}

export interface List {
  /**@description Adicione o icon para o check list */
  iconCheck?: ImageWidget;

  textList?: TextList[];

  widthContainerList: "400" | "500";

  tags?: Tags[];

  cardInfo?: CardInfo[];

  /** @title Ocultar o card no mobile */
  hiddenCardInfo?: boolean;
}

export interface Button {
  textButton: string;
  link: string;
}

export interface Content {
  /** @format html */
  title?: string;
  /** @format html */
  description?: string;

  list?: List;

  button?: Button;
}

export interface Props {
  /** @title Temperatura do local */
  temperature: Temperature | null;

  bannerImg: Img;

  contentText?: Content;

  /** @title Espaçamento do container*/
  /** @description margem do container para deixar conteúdo centralizado ou normal */
  styleContainer?: "center" | "normal";

  /** @title Posicionamento */
  placement?: "esquerdo" | "direito";

  /** @tilte Margin top */
  /** @description Espaçamento entre uma section e outra ex:10px*/
  marginTop?: string;

  /** @tilte Margin Bottom*/
  /** @description spaçamento entre uma section e outra ex:10px*/
  marginBottom?: string;

  /** @description imagem de fundo */
  imageBackground?: ImageWidget;
}

const PLACEMENT = {
  esquerdo: "flex-col lg:flex-row-reverse",
  direito: "flex-col lg:flex-row",
};

const variants = {
  center: "mx-auto",
  normal: "",
};

const widthContainer = {
  400: "400px",
  500: "500px",
};

export default function BannerWithTextColumn({
  bannerImg,
  contentText,
  placement = "direito",
  styleContainer = "normal",
  marginTop,
  marginBottom,
  device = "desktop",
  imageBackground,
  temperature,
}: Props & { device: string }) {
  const widthContainerValue = contentText && contentText.list
    ? contentText.list.widthContainerList
    : 400;
  const ishidden = contentText && contentText.list?.hiddenCardInfo
    ? contentText.list?.hiddenCardInfo
    : false;

  return (
    <div class="w-full relative">
      <div
        class={`w-full max-w-5xl m-auto z-10 px-5 lg:px-0 lg:py-0 flex ${
          PLACEMENT[placement]
        } justify-between `}
        style={{ marginTop: `${marginTop}`, marginBottom: `${marginBottom}` }}
      >
        <div class="lg:w-1/2 z-10">
          {device === "desktop"
            ? (
              bannerImg.imageDesktop && (
                <Image
                  src={bannerImg.imageDesktop}
                  width={bannerImg.widthDesktop || 632}
                  height={bannerImg.heightDesktop || 372}
                  alt={bannerImg.alt}
                  loading="eager"
                  className="hidden mx-auto lg:block"
                />
              )
            )
            : (
              bannerImg.imageMobile && (
                <Image
                  src={bannerImg.imageMobile}
                  width={bannerImg.widthMobile || 358}
                  height={bannerImg.heightMobile || 229}
                  alt={bannerImg.alt}
                  loading="eager"
                  className="block mx-auto lg:hidden"
                />
              )
            )}
        </div>

        {/** content text */}
        {contentText && (
          <div class="flex flex-col gap lg:w-1/2">
            <div
              class={`w-full max-w-lg   mx-auto ${variants[styleContainer]} `}
            >
              {temperature && (
                <div class="flex flex-col items-center">
                  <div class="text-xl lg:text-4xl font-black ">
                    <p>
                      Nova Deli temperatura local de {temperature.celsius}°C
                    </p>
                  </div>
                </div>
              )}

              {contentText.title && (
                <div
                  class=" text-xl lg:text-4xl text-primary font-black not-italic mb-6 mt-7 lg:mb-8 lg:mt-3 "
                  dangerouslySetInnerHTML={{ __html: contentText.title }}
                >
                </div>
              )}

              {/** tags */}

              {contentText.list?.tags && (
                <div>
                  <ul class="flex gap-4 pb-6">
                    {contentText.list.tags.map((tag, index) => (
                      <li key={index}>
                        {device === "desktop"
                          ? (
                            <Image
                              src={tag.iconsDesktop}
                              width={tag.widthDesktop || 135}
                              height={tag.heightDesktop || 33}
                              class=""
                            />
                          )
                          : (
                            <Image
                              src={tag.iconsMobile}
                              width={tag.widthMobile || 117}
                              height={tag.heightMobile || 33}
                              class=""
                            />
                          )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(!ishidden || device === "desktop") &&
                contentText.list?.cardInfo && (
                <div>
                  <ul class="flex gap-6 pb-6">
                    {contentText.list?.cardInfo.map((card, index) => (
                      <li
                        key={index}
                        class="flex flex-col items-center justify-center n1-custom-cardsInfo w-full max-w-56 py-6 px-5"
                      >
                        <span class=" font-archimoto-black text-2xl lg:text-4xl font-black ">
                          {card.percentage}
                        </span>
                        <p class="text-14 lg:text-18 font-normal text-white">
                          {card.about}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {contentText.description && (
                <div
                  class=" text-sm lg:text-base  font-normal "
                  dangerouslySetInnerHTML={{ __html: contentText.description }}
                >
                </div>
              )}
            </div>

            {/** text List */}

            {contentText.list && (
              <div class={`flax ${variants[styleContainer]}`}>
                <ul class=" flex flex-col gap-4 ">
                  {contentText.list.textList &&
                    contentText.list.textList.map((text, index) => (
                      <li key={index} class="flex gap-4">
                        {text.descriptionList && (
                          <div class=" flex gap-4 items-start">
                            <img src={contentText.list?.iconCheck} />
                            <div
                              class={`text-sm lg:text-base font-normal 
                               w-full max-w-[${
                                widthContainer[widthContainerValue]
                              }`}
                              dangerouslySetInnerHTML={{
                                __html: text.descriptionList,
                              }}
                            >
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {contentText.button && (
              <a
                href={contentText.button.link}
                className={`flex mt-6 hover:brightness-90 w-full max-w-md ${
                  variants[styleContainer]
                }`}
              >
                <button className="bg-emerald-300 rounded-[100px] px-6 py-4 ]">
                  <span className="text-base font-black text-cyan-950 uppercase">
                    {contentText.button.textButton}
                  </span>
                </button>
              </a>
            )}
          </div>
        )}
      </div>

      {imageBackground && (
        <div class="absolute  -top-72 left-0 z-0 ">
          <Image
            src={imageBackground}
            width={400}
            alt="icon background"
            class="hidden lg:block"
          />
        </div>
      )}
    </div>
  );
}

export const loader = (props: Props, _req: Request, ctx: FnContext) => {
  return {
    ...props,
    device: ctx.device || "desktop",
  };
};
