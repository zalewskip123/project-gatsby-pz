import * as React from "react";
import PageInfo from "../components/PageInfo/Pageinfo";
import ContactPreview from "../components/ContactPreview/ContactPreview";

const pageData = {
  title: 'contact',
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
}

const ContactPage = () => {
  return (
    <>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
      <ContactPreview />
    </>
  )
}

export default ContactPage

export const Head = () => <title>Contact Page</title>