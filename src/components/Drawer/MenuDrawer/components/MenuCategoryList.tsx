import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from '@chakra-ui/react';

import { AppDispatch, RootState } from '~/state/store';
import { setNavigationPath } from '~/state/navigation/navigationSlice';
import { Category } from '~/services/config/models/Category';

import { Button } from '~/components/Forms';
import { Heading } from '~/components/TypoGraphy';
import { VStack } from '~/components/Layouts';

interface MenuCategoryListProps {
  /**
   * The current category item.
   */
  category: Category;
  /**
   * The hander for onClick event on the child category item.
   */
  childCategoryAction: (category: Category) => void;
}

/**
 * A UI component to render the menu category list.
 */
export function MenuCategoryList({
  category,
  childCategoryAction,
}: MenuCategoryListProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { navigationPath } = useSelector(
    (state: RootState) => state.navigation
  );

  const [isLaptop] = useMediaQuery('(min-width: 1024px)');
  const isActive = category.id === navigationPath[category.depth]?.id;

  return (
    <VStack
      key={category.id}
      alignItems="flex-start"
      gap={[12, 12, 12, 20]}
      mb={isLaptop ? 28 : isActive ? 20 : 0}
    >
      {/* The heading of the category group. */}
      {isLaptop || !!category.depth ? (
        <Heading
          text={category.name}
          level={5}
          variant="gray"
          size="xs"
          className="Animation--fadeSlideIn"
          weight={700}
        />
      ) : (
        <Button
          variant="ghost"
          label={category.name}
          lableWeight="bold"
          className="Animation--fadeSlideIn leading-26"
          isActive={isActive}
          onClick={() => {
            const currentNavigationPath = {
              id: category.id,
              selectedCategory: category,
            };
            if (!category.depth) {
              dispatch(setNavigationPath([currentNavigationPath]));
            } else {
              const newNavigationPath = [...navigationPath];
              newNavigationPath[category.depth] = currentNavigationPath;
              dispatch(setNavigationPath(newNavigationPath));
            }
          }}
        />
      )}

      {/*
       ** The list of child categories:
       ** we only want to show the list in mobile view
       ** if the category is active or in laptop view.
       */}
      {(isActive || isLaptop) &&
        category.data.map((childCategory, idx) => (
          <Button
            key={childCategory.id}
            variant="ghost"
            size={isLaptop ? '2xl' : 'xl'}
            label={childCategory.name}
            lableVariant="gray"
            className="Animation--fadeSlideIn leading-26"
            isActive={
              isLaptop &&
              navigationPath[childCategory.depth]?.id === childCategory.id
            }
            onClick={() => childCategoryAction(childCategory)}
            style={{
              animationDelay: `${idx * 0.1}s`,
            }}
          />
        ))}
    </VStack>
  );
}
