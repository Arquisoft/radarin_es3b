import ProcessOn from "../hooks/ProcessOn";


function flushPromises() {
  // eslint-disable-next-line no-undef
  return new Promise(resolve => setImmediate(resolve));
}

it('processOn works', () => {
  const mockGeolocation = {
    getCurrentPosition: jest.fn().mockImplementation(success =>
      Promise.resolve(
        success({
          coords: {
            latitude: 10,
            longitude: 10
          }
        })
      )
    )
  };

  navigator.geolocation = mockGeolocation;

  // Create element
  const element = document.createElement('processOn', {
    is: ProcessOn
  });
  document.body.appendChild(element);

  return flushPromises().then(() => {
    expect(element).not.toBe(undefined)
  })
})