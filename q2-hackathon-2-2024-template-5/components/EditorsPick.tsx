import Image from "next/image";
import Images from "../components/Images";

const EditorPickSection = () => {
  return (
    <section className="editor-pick-section">
      {/* Heading */}
      <div className="editor-pick-text">
        <h2 className="editor-pick-heading">Editor&apos;s Pick</h2>
        <p className="editor-pick-subheading">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Flex Layout */}
      <div className="editor-pick-flex">
        {/* Men */}
        <div className="editor-pick-card editor-pick-men">
          <Image
            src={Images.Man1}
            alt="Men"
            layout="fill"
            objectFit="cover"
            className="editor-pick-image"
          />
          <div className="editor-pick-overlay">
            <button className="editor-pick-button men-button">MEN</button>
          </div>
        </div>

        {/* Women */}
        <div className="editor-pick-card editor-pick-women">
          <Image
            src={Images.Women1}
            alt="Women"
            layout="fill"
            objectFit="cover"
            className="editor-pick-image"
          />
          <div className="editor-pick-overlay">
            <button className="editor-pick-button women-button">WOMEN</button>
          </div>
        </div>

        {/* Accessories and Kids */}
        <div className="editor-pick-column">
          {/* Accessories */}
          <div className="editor-pick-card editor-pick-accessories">
            <Image
              src={Images.Women2}
              alt="Accessories"
              layout="fill"
              objectFit="cover"
              className="editor-pick-image"
            />
            <div className="editor-pick-overlay">
              <button className="editor-pick-button accessories-button">
                ACCESSORIES
              </button>
            </div>
          </div>

          {/* Kids */}
          <div className="editor-pick-card editor-pick-kids">
            <Image
              src={Images.Man2}
              alt="Kids"
              layout="fill"
              objectFit="cover"
              className="editor-pick-image"
            />
            <div className="editor-pick-overlay">
              <button className="editor-pick-button kids-button">KIDS</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorPickSection;
