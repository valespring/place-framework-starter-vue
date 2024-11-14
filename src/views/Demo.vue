<template>
  <Wrapper>
    <div v-for="demoRow in demoRows" :class="demoRow.sectionClassName" :style="{'--demo-color': demoRow.color }">
      <pre v-if="demoRow.description">
        {{demoRow.description}}<br>
        {{demoRow.cols}}
      </pre>
      <RowContainer :flex="demoRow.flex" :flush="demoRow.flush" :rtl="demoRow.rtl">
         <RowItem v-for="item in demoRow.items" :bind="item" :cols="demoRow.cols" :offset="demoRow.offset">
            <div class="item-fill">
              {{item}}
            </div>
          </RowItem>
      </RowContainer>
    </div>
    <div v-for="demoGrid in demoGrids" :class="demoGrid.sectionClassName" :style="{'--demo-color': demoGrid.color }">
      <pre v-if="demoGrid.description">
        {{demoGrid.description}}<br>
        {{demoGrid.cols}}
      </pre>
      <GridContainer :spaced="demoGrid.spaced" :cols="demoGrid.cols">
         <div class="item-fill" v-for="item in demoGrid.items" :bind="item">
            {{item}}
          </div>
      </GridContainer>
    </div>
  </Wrapper>
</template>


<script>
  import Wrapper from '@c/place/Wrapper';
  import GridContainer from '@c/place/GridContainer';
  import RowContainer from '@c/place/RowContainer';
  import RowItem from '@c/place/RowItem';

  export default {
    name: 'Demo',
     components: {
      Wrapper,
      GridContainer,
      RowContainer,
      RowItem
    },
    data() {
      return {
        varsDescription: '"cols" var used',
        demoGrids: [
          {
            sectionClassName: 'demo-grid-normal',
            description: 'A normal CSS grid with no spacing.',
            cols: ['quarters', 'halves', 'halves'],
            color: '#FCEFEF',
            spaced: false,
            items: [
              'Grid Item 1',
              'Grid Item 2',
              'Grid Item 3',
              'Grid Item 4'
            ]
          },
          {
            sectionClassName: 'demo-grid-normal',
            description: 'A normal CSS grid with spacing.',
            cols: ['quarters', 'halves', 'halves'],
            color: '#FCEFEF',
            spaced: true,
            items: [
              'Grid Item 1',
              'Grid Item 2',
              'Grid Item 3',
              'Grid Item 4'
            ]
          }
        ],
        demoRows: [
          {
            sectionClassName: 'demo-row-normal',
            description: 'A normal old-school row using floats. Note that either column count or percentages can be used if a match can be found.',
            color: '#6482AD',
            cols: [3,50,50],
            items: [
              'Normal Item 1',
              'Normal Item 2',
              'Normal Item 3',
              'Normal Item 4'
            ]
          },
          {
            sectionClassName: 'demo-row-rtl',
            description: 'The above example with inverted direction RTL.',
            rtl: true,
            color: '#7FA1C3',
            cols: [3,50,50],
            items: [
              'RTL Item 1',
              'RTL Item 2',
              'RTL Item 3',
            ]
          },
          {
            sectionClassName: 'demo-row-flex',
            description: 'The above example with inverted direction RTL.',
            flex: true,
            color: '#E2DAD6',
            cols: [25,50,50],
            items: [
              'Flex Item 1',
              'Flex Item 2',
              'Flex Item 3',
              'Flex Item 4'
            ]
          },
          {
            sectionClassName: 'demo-row-offset',
            description: 'A row with offset columns. Note some math is needed to equate to the total column count.',
            color: '#F5EDED',
            cols: [5, 50, 50],
            offset: [1, null, null],
            items: [
              'Offset Item 1',
              'Offset Item 2',
            ]
          },
        ]
      }
    }
  }
</script>