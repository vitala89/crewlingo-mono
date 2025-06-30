import { adminUsers } from './admin-users.js';

describe('adminUsers', () => {
  it('should work', () => {
    expect(adminUsers()).toEqual('admin-users');
  })
})
