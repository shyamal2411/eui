/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

// THIS IS A GENERATED FILE. DO NOT MODIFY MANUALLY. @see scripts/compile-icons.js

import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const EuiIconLaunch = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#343741"
      fillRule="evenodd"
      d="M12 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      clipRule="evenodd"
    />
    <path
      fill="#343741"
      fillRule="evenodd"
      d="M14.545 1.002C11.287.706 8.714 2.064 6.726 4.02l-.372-.373a.5.5 0 0 0-.597-.083l-4.5 2.5a.5.5 0 0 0-.014.866l2.314 1.388a25.99 25.99 0 0 0-.504.96.5.5 0 0 0 .093.577l3 3a.5.5 0 0 0 .578.093c.315-.158.636-.326.959-.504l1.388 2.314a.5.5 0 0 0 .866-.014l2.5-4.5a.5.5 0 0 0-.083-.597l-.373-.372c1.955-1.988 3.313-4.561 3.017-7.82a.5.5 0 0 0-.453-.452Zm-3.29 8.96a18.932 18.932 0 0 1-2.708 1.979l.936 1.56 1.897-3.414-.125-.125ZM5.913 4.62l.125.125A18.932 18.932 0 0 0 4.06 7.453L2.5 6.517 5.914 4.62Zm.684 7.27L4.11 9.403C6.063 5.63 9.248 1.768 14.03 1.97c.202 4.782-3.659 7.967-7.433 9.92Z"
      clipRule="evenodd"
    />
    <path
      fill="#343741"
      d="M3.854 12.854a.5.5 0 1 0-.708-.708l-2 2a.5.5 0 1 0 .708.707l2-2Zm-1-2.208a.5.5 0 0 1 0 .707l-1 1a.5.5 0 1 1-.708-.707l1-1a.5.5 0 0 1 .708 0Zm2.5 2.5a.5.5 0 0 1 0 .707l-1 1a.5.5 0 1 1-.708-.707l1-1a.5.5 0 0 1 .708 0Z"
    />
  </svg>
);
export const icon = EuiIconLaunch;
