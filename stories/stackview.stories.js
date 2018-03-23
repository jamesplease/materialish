import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs/react';
import { setOptions } from '@storybook/addon-options';
import '../components/stackview/stackview.css';
import StackView from '../components/stackview/stackview';
import Navigation from '../components/navigation/navigation';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true
});

const fakeImgStyles = {
  width: '100%',
  paddingTop: '100%',
  backgroundColor: '#ccc'
};

const bgndColor = {
  backgroundColor: 'pink',
  border: '1px solid black',
  overflow: 'hidden'
};

const verticallyCentered = {
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '5px',
  boxSizing: 'border-box'
};

storiesOf('Stack View', module)
  .addDecorator(withKnobs)
  .add('Regular', () => (
    <StackView
      spacing={number('Spacing', 0)}
      vertical={boolean('Vertical', false)}>
      <StackView.Item size={'400px'} style={bgndColor}>
        <p>400px</p>
      </StackView.Item>
      <StackView.Item style={bgndColor} minSize="100px">
        <p>min(100px)</p>
      </StackView.Item>
      <StackView.Item style={bgndColor}>
        <p>1fr</p>
      </StackView.Item>
      <StackView.Item size={'200px'} style={bgndColor}>
        <p>200px</p>
      </StackView.Item>
      <StackView.Item style={bgndColor} ratio={2}>
        <p>2fr</p>
      </StackView.Item>
      <StackView.Item style={bgndColor}>
        <p>1fr</p>
      </StackView.Item>
    </StackView>
  ))
  .add('Tiled', () => (
    <StackView.Tiled
      spacing={number('Spacing', 10)}
      tileSize={number('Min Tile Size', 200)}>
      <StackView.Item>
        <div className="fakeImg" style={fakeImgStyles} />
      </StackView.Item>
      <StackView.Item>
        <div className="fakeImg" style={fakeImgStyles} />
      </StackView.Item>
      <StackView.Item>
        <div className="fakeImg" style={fakeImgStyles} />
      </StackView.Item>
      <StackView.Item>
        <div className="fakeImg" style={fakeImgStyles} />
      </StackView.Item>
      <StackView.Item>
        <div className="fakeImg" style={fakeImgStyles} />
      </StackView.Item>
      <StackView.Item>
        <div className="fakeImg" style={fakeImgStyles} />
      </StackView.Item>
      <StackView.Item>
        <div className="fakeImg" style={fakeImgStyles} />
      </StackView.Item>
      <StackView.Item>
        <div className="fakeImg" style={fakeImgStyles} />
      </StackView.Item>
    </StackView.Tiled>
  ))
  .add('Table', () => {
    const tableRowSize = number('Row Size', 30);
    return (
      <StackView
        vertical
        style={{ border: '1px solid #eee', overflow: 'scroll' }}>
        <StackView size={`${tableRowSize}px`}>
          <StackView.Item
            size="300px"
            style={{
              ...verticallyCentered,
              backgroundColor: '#eee',
              fontWeight: 500,
              position: 'sticky',
              left: 0,
              zIndex: 2,
              borderRight: '1px solid #ccc'
            }}>
            Column 1
          </StackView.Item>
          <StackView.Item
            size="300px"
            style={{
              ...verticallyCentered,
              backgroundColor: '#eee',
              fontWeight: 500
            }}>
            Column 2
          </StackView.Item>
          <StackView.Item
            size="300px"
            style={{
              ...verticallyCentered,
              backgroundColor: '#eee',
              fontWeight: 500
            }}>
            Column 3
          </StackView.Item>
          <StackView.Item
            size="300px"
            style={{
              ...verticallyCentered,
              backgroundColor: '#eee',
              fontWeight: 500
            }}>
            Column 4
          </StackView.Item>
          <StackView.Item
            style={{
              ...verticallyCentered,
              backgroundColor: '#eee',
              fontWeight: 500
            }}
          />
        </StackView>
        <StackView size={`${tableRowSize}px`}>
          <StackView.Item
            size="300px"
            ratio={1.5}
            style={{
              ...verticallyCentered,
              position: 'sticky',
              left: 0,
              zIndex: 2,
              borderRight: '1px solid #ccc',
              backgroundColor: '#fff'
            }}>
            Column 1
          </StackView.Item>
          <StackView.Item size="300px" style={verticallyCentered}>
            Column 2
          </StackView.Item>
          <StackView.Item size="300px" style={verticallyCentered}>
            Column 3
          </StackView.Item>
          <StackView.Item size="300px" style={verticallyCentered}>
            Column 4
          </StackView.Item>
        </StackView>
        <StackView size={`${tableRowSize}px`}>
          <StackView.Item
            size="300px"
            ratio={1.5}
            style={{
              ...verticallyCentered,
              position: 'sticky',
              left: 0,
              zIndex: 2,
              borderRight: '1px solid #ccc',
              backgroundColor: '#fff'
            }}>
            Column 1
          </StackView.Item>
          <StackView.Item size="300px" style={verticallyCentered}>
            Column 2
          </StackView.Item>
          <StackView.Item size="300px" style={verticallyCentered}>
            Column 3
          </StackView.Item>
          <StackView.Item size="300px" style={verticallyCentered}>
            Column 4
          </StackView.Item>
          <StackView.Item />
        </StackView>
      </StackView>
    );
  })
  .add('Example', () => (
    <StackView style={{ width: '100%', minHeight: '100vh' }} vertical>
      <StackView.Item
        size={'72px'}
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'teal',
          justifyContent: 'center',
          color: '#fff',
          position: 'sticky',
          top: 0
        }}>
        <p>Header</p>
      </StackView.Item>
      <StackView.Item>
        <StackView>
          <StackView.Item size={'300px'} style={{ backgroundColor: '#242424' }}>
            <Navigation vertical style={{ position: 'sticky', top: 72 }}>
              <Navigation.Item>Item 1</Navigation.Item>
              <Navigation.Item active>Item 2</Navigation.Item>
              <Navigation.Item>Item 3</Navigation.Item>
              <Navigation.Item>Item 4</Navigation.Item>
            </Navigation>
          </StackView.Item>
          <StackView.Item
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#eee'
            }}>
            <StackView
              vertical
              style={{
                width: '100%',
                padding: '0 10px 10px',
                boxSizing: 'border-box'
              }}>
              <StackView.Item size={'50px'}>
                <h3
                  style={{
                    margin: 0,
                    padding: 0,
                    lineHeight: '50px'
                  }}>
                  Gallery
                </h3>
              </StackView.Item>
              <StackView.Item>
                <StackView.Tiled spacing={10} tileSize={'200px'}>
                  <StackView.Item>
                    <div className="fakeImg" style={fakeImgStyles} />
                  </StackView.Item>
                  <StackView.Item>
                    <div className="fakeImg" style={fakeImgStyles} />
                  </StackView.Item>
                  <StackView.Item>
                    <div className="fakeImg" style={fakeImgStyles} />
                  </StackView.Item>
                  <StackView.Item>
                    <div className="fakeImg" style={fakeImgStyles} />
                  </StackView.Item>
                  <StackView.Item>
                    <div className="fakeImg" style={fakeImgStyles} />
                  </StackView.Item>
                  <StackView.Item>
                    <div className="fakeImg" style={fakeImgStyles} />
                  </StackView.Item>
                  <StackView.Item>
                    <div className="fakeImg" style={fakeImgStyles} />
                  </StackView.Item>
                  <StackView.Item>
                    <div className="fakeImg" style={fakeImgStyles} />
                  </StackView.Item>
                </StackView.Tiled>
              </StackView.Item>
            </StackView>
          </StackView.Item>
        </StackView>
      </StackView.Item>
      <StackView.Item
        size={'72px'}
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'teal',
          justifyContent: 'center',
          color: '#fff'
        }}>
        <p>Footer</p>
      </StackView.Item>
    </StackView>
  ));
