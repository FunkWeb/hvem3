import { mockProfiles } from './mockProfiles';
import type { Profile } from './profileTypes';
import type { GroupId } from './groups';

export async function getProfilesByGroup(groupId: GroupId): Promise<Profile[]> {
    // Replace mockProfiles with the real data source once it's available
  return mockProfiles.filter((profile) => profile.group === groupId);
}