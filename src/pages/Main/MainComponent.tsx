import { FooterComponent } from "./components/FooterComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { FormComponent } from "./components/FormComponent";

export function MainComponent() {
  return (
    <div className="formContainer">
      <div className="headerComponent">
        <HeaderComponent />
      </div>
      <div className="formComponent">
        <FormComponent />
      </div>
      <div className="footerComponent">
        <FooterComponent />
      </div>
    </div>
  );
}
