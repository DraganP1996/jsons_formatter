import { Panel } from "../ui";
import { AdditionalInfoSection } from "./additonal-info-section";

export const JsonBeautifyAddionalContent = () => {
  return (
    <div className="flex flex-col text-md justify-center items-center">
      <div className="w-[900px] p-4 flex flex-col gap-2">
        <Panel
          initialState={true}
          wrapperClassName=""
          heading={
            <h2 className="text-3xl font-semibold font-electrolize flex-1">
              Introdution to the JSON Beautify tool
            </h2>
          }
        >
          <AdditionalInfoSection className="">
            <p>
              JSON, or <strong>J</strong>ava
              <strong>S</strong>cript <strong>O</strong>
              bject <strong>N</strong>otation, is a widely used format for data interchange between
              applications. For a comprehensive overview of JSON, you may refer to this{" "}
              <a href="">article</a> .
            </p>
            <p>
              Over the past few decades, JSON has gained immense popularity due to its simplicity,
              making it accessible for both humans and machines. While machines can easily process
              JSON in any format, humans benefit from specific spacing and indentation conventions
              that enhance the clarity of the content within a JSON file.
            </p>
            <p>
              This tool is designed to swiftly convert JSON files into a more accessible format,
              facilitating easier data reading, especially for developers. It improves the original
              JSON by incorporating indentation and spacing, which greatly assists in debugging,
              editing, and understanding complex JSON structures. In the editors provided, the
              unformatted JSON appears on the left, while a more organized version is displayed on
              the right, showcasing a significant enhancement in readability for users.
            </p>
          </AdditionalInfoSection>
        </Panel>
        <Panel
          initialState={true}
          heading={
            <h2 className="text-3xl font-semibold font-electrolize">
              What features does this tool offer?
            </h2>
          }
        >
          <AdditionalInfoSection>
            <ul>
              <li className="pt-2 ml-4 list-disc">
                {" "}
                <strong>JSON prettification</strong>: As you begin typing or pasting content into
                the left editor, the right editor will display the formatted versions of your JSON.
              </li>
              <li className="pt-2 ml-4 list-disc">
                <strong>Error detection</strong>: If there are any errors in the JSON source you
                provide, the tool will lint your JSON, presenting a list of detailed explanations
                for each error, enabling you to resolve the issues effectively.
              </li>
              <li className="pt-2 ml-4 list-disc">
                {" "}
                <strong>Customization </strong>: The tool includes various customization features,
                such as adjustable user interface settings for the editors, the ability to upload
                data from a file on your machine for beautification, and customizable tab sizes.
                Additional customization options are planned for future update.
              </li>
              <li className="pt-2 ml-4 list-disc">
                <strong>Upload Data</strong>: You can choose a JSON file from your device, and it
                will be automatically beautified.
              </li>
              <li className="pt-2 ml-4 list-disc">
                <strong>Download</strong>: You can download the formatted result if you wish to
                share the formatted JSON.
              </li>
            </ul>
          </AdditionalInfoSection>
        </Panel>
        <Panel
          initialState={true}
          heading={<h2 className="text-3xl font-semibold font-electrolize">Common JSON errors</h2>}
        >
          <AdditionalInfoSection>
            <ul>
              <li className="pt-2 ml-4 list-disc">
                {" "}
                <strong>JSON prettification</strong>: As you begin typing or pasting content into
                the left editor, the right editor will display the formatted versions of your JSON.
              </li>
              <li className="pt-2 ml-4 list-disc">
                <strong>Error detection</strong>: If there are any errors in the JSON source you
                provide, the tool will lint your JSON, presenting a list of detailed explanations
                for each error, enabling you to resolve the issues effectively.
              </li>
              <li className="pt-2 ml-4 list-disc">
                {" "}
                <strong>Customization </strong>: The tool includes various customization features,
                such as adjustable user interface settings for the editors, the ability to upload
                data from a file on your machine for beautification, and customizable tab sizes.
                Additional customization options are planned for future update.
              </li>
            </ul>
          </AdditionalInfoSection>
        </Panel>
        <div className="flex flex-col gap-2 px-4">
          <h3 className="text-2xl font-semibold font-electrolize"> FAQ </h3>

          <Panel
            initialState={false}
            heading={
              <h4 className="text-xl font-semibold font-electrolize">
                {" "}
                Is JSON Beautify available for free? Is there a need to log in or sign up?{" "}
              </h4>
            }
          >
            <AdditionalInfoSection>
              <p> No, eve</p>
            </AdditionalInfoSection>
          </Panel>
          <Panel
            initialState={false}
            heading={
              <h4 className="text-xl font-semibold font-electrolize">
                Is the tool retaining the JSON data that I input?
              </h4>
            }
          >
            <AdditionalInfoSection>
              <p>
                By default, any content you enter or paste into our editors is not saved. However,
                there are two exceptions to this rule:
              </p>
              <ol>
                <li className="pt-2 ml-4 list-decimal">
                  When you download the formatted result, we temporarily store the JSON solely for
                  the purpose of file creation, and once the file is generated, the JSON data is
                  removed from our server&apos;s memory.
                </li>
                <li className="pt-2 ml-4 list-decimal">
                  When you generate a link: Due to certain technical constraints regarding the
                  storage of large JSON files in the URL, we must save the JSON in a database,
                  assign an ID, and use that ID to create the link.
                </li>
              </ol>
            </AdditionalInfoSection>
          </Panel>
          <Panel
            initialState={false}
            heading={
              <h4 className="text-xl font-semibold font-electrolize">
                {" "}
                Is JSON Beautify available for free? Is there a need to log in or sign up?{" "}
              </h4>
            }
          >
            <AdditionalInfoSection>
              <p> No, eve</p>
            </AdditionalInfoSection>
          </Panel>
        </div>
      </div>
    </div>
  );
};
