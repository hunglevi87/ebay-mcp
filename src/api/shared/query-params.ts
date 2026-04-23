export function buildValidatedPaginatedParams(
  filter?: string,
  limit?: number,
  offset?: number
): Record<string, string | number> {
  const params: Record<string, string | number> = {};

  if (filter !== undefined) {
    if (typeof filter !== 'string') {
      throw new Error('filter must be a string when provided');
    }
    params.filter = filter;
  }

  if (limit !== undefined) {
    if (typeof limit !== 'number' || limit < 1) {
      throw new Error('limit must be a positive number when provided');
    }
    params.limit = limit;
  }

  if (offset !== undefined) {
    if (typeof offset !== 'number' || offset < 0) {
      throw new Error('offset must be a non-negative number when provided');
    }
    params.offset = offset;
  }

  return params;
}

export function buildTruthyPaginatedParams(
  filter?: string,
  limit?: number,
  offset?: number
): Record<string, string | number> {
  const params: Record<string, string | number> = {};

  if (filter) {
    params.filter = filter;
  }

  if (limit) {
    params.limit = limit;
  }

  if (offset) {
    params.offset = offset;
  }

  return params;
}
