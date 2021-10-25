import React from "react";

import { FormSubscribe, InputEvent, Button } from "./Subscribe.style";

const Subscribe = () => {
  return (
    <FormSubscribe>
      <InputEvent type="email" name="subscribe" placeholder="Email address *" />
      <Button type="submit">Subscribe</Button>
    </FormSubscribe>
  );
};

export default Subscribe;
