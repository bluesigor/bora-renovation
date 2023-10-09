import { memo } from "react";

import useMeasures from "../../core/hooks/useMeasures";
import ProcessList from "./ProcessList";
import ProcessDesk from "./ProcessDesk";

function Process() {
  const { innerWidth } = useMeasures();

  return (
    <section className="process">
      <div className="process-header">
        <h1 className="process-header__title">
          {innerWidth > 768
            ? "Our process"
            : "Swipe right to learn about our process"}
        </h1>
      </div>
      {innerWidth > 768 ? <ProcessDesk /> : <ProcessList />}
    </section>
  );
}

export default memo(Process);
