export function getKycStatusStringUtil(status: number) {
  if (status >= 100 && status < 200) {
    return 'Pending';
  }

  if (status >= 200 && status < 300) {
    return 'Verified';
  }

  if (status >= 300 && status < 400) {
    return 'Redirected';
  }

  if (status >= 400 && status < 500) {
    return 'Rejected';
  }

  if (status >= 500 && status < 600) {
    return 'Unable to Process';
  }

  return 'Unknown Status';
}

export function getKycStatusVariantUtil(status: number) {
  if (status >= 100 && status < 200) {
    return 'warning'; // Pending
  }

  if (status >= 200 && status < 300) {
    return 'default'; // Verified
  }

  if (status >= 300 && status < 400) {
    return 'secondary'; // Redirected
  }

  if (status >= 400 && status < 500) {
    return 'destructive'; // Rejected
  }

  if (status >= 500 && status < 600) {
    return 'destructive'; // Unable to Process
  }

  return 'outline'; // Unknown status
}

export function getUserStatusUtil(status: boolean) {
  return status ? 'Active' : 'Inactive';
}
