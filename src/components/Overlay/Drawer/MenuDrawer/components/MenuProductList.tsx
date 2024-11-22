import { useTranslation } from 'react-i18next';
import { Image } from '@chakra-ui/react';

import { useDisclosureStore } from '~/contexts/disclosure/useDisclosureStore';
import { Product } from '~/services/product/models/Product';

import { Heading, Text } from '~/components/TypoGraphy';
import { HStack, VStack } from '~/components/Layouts';

interface MenuProductListProps {
  /**
   * The current category name.
   */
  categoryName: string;
  /**
   * The product list of the current category.
   */
  productList: Product[];
}

/**
 * A UI component to render the menu product list by category.
 */
export function MenuProductList({
  categoryName,
  productList,
}: MenuProductListProps) {
  const { t } = useTranslation();
  const { onDrawerClose } = useDisclosureStore();

  return (
    <>
      <Heading
        text={categoryName}
        level={5}
        variant="secondary"
        size="xs"
        weight={700}
      />

      {productList.length ? (
        <>
          <Text
            text={t('result-count', {
              count: productList.length,
            })}
            size="xl"
            className="Animation--fadeSlideIn text-gray-500 mt-4"
          />
          <VStack gap={40} className="w-full my-36">
            {productList.map((product, idx) => (
              <HStack
                key={product.id}
                onClick={onDrawerClose}
                className="Animation--fadeSlideIn w-full flex justify-between items-center"
                style={{
                  animationDelay: `${idx * 0.2}s`,
                }}
              >
                <VStack alignItems="flex-start" gap={8}>
                  <Heading
                    text={product.name}
                    level={6}
                    size="xs"
                    variant="secondary"
                  />
                  <Text text={product.functionality} size="sm" />
                  {/* TODO: monetary format */}
                  <Text
                    text={product.price.toString()}
                    size="sm"
                    variant="gray"
                    className="mt-4"
                  />
                </VStack>

                <Image src={product.front_image.thumbnail} h="72px" w="72px" />
              </HStack>
            ))}
          </VStack>
        </>
      ) : (
        <Text text={t('no-results')} size="xl" variant="gray" />
      )}
    </>
  );
}
