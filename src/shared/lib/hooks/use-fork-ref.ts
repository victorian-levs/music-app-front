import type { Ref, RefCallback } from 'react';
import { useMemo } from 'react';

export type UseForkRefProps<K> = Array<Ref<K> | undefined>;
export type UseForkRefResult<W> = RefCallback<W> | null;

export const setRef = <T>(ref: Ref<T | null> | undefined, value: T | null) => {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
};

export const mergeRefs = <T>(...refs: (Ref<T> | undefined)[]): RefCallback<T> =>
  function mergedRefs(value) {
    for (const ref of refs) {
      setRef(ref, value);
    }
  };

/**
 * Хук для объединения нескольких ref-ов в один.
 *
 * Если все ref-ы равны `null` или `undefined`,
 * хук вернёт `null`, чтобы не создавать лишний callback.
 *
 * @example
 * const handleRef = useForkRef(localRef, extendedRef);
 * return <div ref={handleRef} />;
 *
 * @param refs Набор ref-ов
 * @returns Объединённый ref или null
 */
export const useForkRef = <T>(...refs: UseForkRefProps<T>): UseForkRefResult<T> => (
  useMemo(() => {
    if (refs.every((ref) => ref === null || ref === undefined)) {
      return null;
    }

    return mergeRefs(...refs);
  }, refs)
);
