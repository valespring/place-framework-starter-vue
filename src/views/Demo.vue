<template>
  <Wrapper>
    <div v-for="demoRow in demoRows" :class="demoRow.sectionClassName" :style="{'--demo-color': demoRow.color }">
      <pre v-if="demoRow.description">
        {{demoRow.description}}<br>
        {{demoRow.cols}}
      </pre>
      <RowContainer :flex="demoRow.flex" :flush="demoRow.flush" :rtl="demoRow.rtl">
         <RowItem v-for="item in demoRow.items" :bind="item" :cols="demoRow.cols" :offset="demoRow.offset">
            <div class="item-fill item-spaced">
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

    <div>
      <h2 v-for="text in typeScale" :class="text">{{text}}</h2>
      <button>Text</button>
    </div>


    <div class="vertical-rhythm">
      <h2>Vertical Rhythm</h2>
      <p class="rhythm-1">Item 1</p>
      <p class="rhythm-2">Item 2</p>
      <p class="rhythm-3">Item 3</p>
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
         typeScale: [
          'inch-type',
          'canon-type',
          'paragon-type',
          'primer-type',
          'tertia-type',
          'normal-type',
          'petite-type',
          'minion-type'
        ],
        demoGrids: [
          {
            sectionClassName: 'demo-grid-normal',
            description: 'A normal CSS grid with no spacing.',
            cols: ['QUARTERS', 'HALVES', 'HALVES'],
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
            cols: ['QUARTERS', 'HALVES', 'HALVES'],
            color: '#fff9f9',
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