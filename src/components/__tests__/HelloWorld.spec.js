import { mount } from '@vue/test-utils';
import { expect, test } from "vitest";
import App from '../../App.vue';

test('emits the input to its parent', async () => {
  const wrapper = mount(App);

  wrapper.find('input[type=email]').setValue('12312@fasfa.com')

  await wrapper.find('form').trigger('submit.prevent')
  // assert the `submit` event is emitted
  expect(wrapper.emitted('submit')[0][0]).toStrictEqual({
    rut: '210006702',
    firstname: 'Charlie',
    lastname: 'White',
    address: '124 gfsgsfdhdfghgohgd',
    city: 'Toronto',
    phone: '55342523523',
    email: '12312@fasfa.com',
    date: '1312312312',
    status: 'das',
    comment: 'asdadasdadasdasdasdas'

  })
});