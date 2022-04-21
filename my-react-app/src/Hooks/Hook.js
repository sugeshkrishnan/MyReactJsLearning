import React from "react";
import UseStateHook from "./useStateHook";
import UseeffectHook from "./useEffectHook";
import UseContextHook from "./useContextHook";
import UseRefHook from "./useRefHook";
import UseCallbackHook from "./usecallBack";
import UseMemoHook from "./useMemo";
import CustomHook from "./customHook";

function Hook() {
  return (
    <>
      <h3>UseState Hook</h3>
      <UseStateHook />
      <br />
      <p>
        ------------------------------------------------------------------------------------
      </p>
      <h3>Use Effect Hook</h3>
      <UseeffectHook />
      <p>
        ------------------------------------------------------------------------------------
      </p>
      <h3>Use Context Hook</h3>
      <UseContextHook />
      <p>
        ------------------------------------------------------------------------------------
      </p>
      <h3>Use Ref Hook</h3>
      <UseRefHook />
      <p>
        ------------------------------------------------------------------------------------
      </p>
      <h3>Use Callback Hook</h3>
      <UseCallbackHook />

      <p>
        ------------------------------------------------------------------------------------
      </p>
      <h3>Use Memo Hook</h3>
      <UseMemoHook />

      <p>
        ------------------------------------------------------------------------------------
      </p>
      <h3>Custom Hook</h3>
      <CustomHook />
    </>
  );
}
export default Hook;
