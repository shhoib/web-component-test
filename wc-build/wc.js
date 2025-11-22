import r2wc from "@r2wc/react-to-web-component";
import CalendarUI from "../app/components/CalendarUI";

const CalendarWC = r2wc(CalendarUI, {
  props: {
    color: "string"
  }
});

customElements.define("calendar-component", CalendarWC);
