import React from "react";
import { useEffect, useState} from "react";

export default function NetlifyForm({formName, method, action, children}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    isMounted && (
    <form
      name={formName}
      method={method}
      action={action}
      data-netlify
      data-netlify-honeypot="bot-field"
      suppressHydrationWarning={true}
    >
      {children}
    </form>
    )
  );
}

//TYPESCRIPT VERSION
// import { ReactNode } from "react";

// interface NetlifyFormProps {
//   formName: string;
//   method: string;
//   action: string;
//   children: ReactNode;
// }

// export default function NetlifyForm({
//   formName,
//   method,
//   action,
//   children
// }: NetlifyFormProps) {
//   return (
//     <form
//       name={formName}
//       method={method}
//       action={action}
//       data-netlify
//       data-netlify-honeypot="bot-field"
//       suppressHydrationWarning={true}
//     >
//       {children}
//     </form>
//   );
// }
