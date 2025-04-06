import { ReactNode } from "react";

export default function StoredValue(): ReactNode {
  return(
    <section className="fixed inset-0 grid grid-cols-[40vw_60vw] grid-row-[40vh_60vh] gap-x-10 gap-y-4">
        <div className="p-4 bg-red-50">Card Value</div>
        <div className="col-start-2 row-span-2 bg-red-50 p-4">Card Options</div>
        <div className="p-4 bg-red-50">Card Details</div>
    </section>
  )
}
