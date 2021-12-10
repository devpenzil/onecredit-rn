import React, {Suspense} from 'react';

function withIconSuspense  (Icon: any, FallBackUi: any)  {
  return (props: any) => {
    return (
      <Suspense fallback={<FallBackUi />}>
        <Icon {...props} />
      </Suspense>
    );
  };
};

function FallBackUi () {
  return null;
};


export  {
  withIconSuspense,
  FallBackUi
}