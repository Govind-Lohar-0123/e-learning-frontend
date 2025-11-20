
export let url = "http://localhost:8000";
export function removeMsg(setMsg) {
    setTimeout(() => {
        setMsg({ status: false, msg: "" });
    }, 4000)
}

export const testCourse={
    name: "Learn Core Java",
    description:
      "This course will provide you in depth knowledge of core HTML and this is the best course and there is high demand for this course.",
    duration: 3,
    image_url: "ProgLang/html.png",
    link: "https://www.w3schools.com/java/",
    topics: [
      "HTML Introduction",
      "HTML Editors",
      "HTML Basic Examples",
      "HTML Elements",
      "HTML Attributes",
      "HTML Headings",
      "HTML Paragraphs",
      "HTML Styles",
      "HTML Text Formatting",
      "HTML Quotation and Citation Elements",
      "HTML Comments",
      "HTML Colors",
      "HTML Styles - CSS",
      "HTML Links",
      "HTML Images",
      "HTML Favicon",
      "HTML Page Title",
      
    ]
    
  }