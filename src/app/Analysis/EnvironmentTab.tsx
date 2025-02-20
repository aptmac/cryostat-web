/*
 * Copyright The Cryostat Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as React from 'react';
import '@app/app.css';
import { Card, CardBody, CardTitle, Grid, GridItem, Stack, StackItem, Text, TextContent, TextList, TextListItem, TextListItemVariants, TextListVariants, TextVariants } from '@patternfly/react-core';

export default function EnvironmentTab() {
  return (
    <Grid hasGutter>
      <GridItem span={12}>
        <Card>
          <CardBody>
            <Stack hasGutter>
              <StackItem>
                <TextContent>
                  <Text component={TextVariants.h1}>
                    Environment
                  </Text>
                </TextContent>
              </StackItem>
              <StackItem isFilled>
                <TextContent>
                  <TextList component={TextListVariants.dl}>
                    <TextListItem component={TextListItemVariants.dt}>OS Version</TextListItem>
                                          <TextListItem component={TextListItemVariants.dd}>Fedora release 27 (Twenty Seven)
                      uname:Linux 4.18.19-100.fc27.x86_64 #1 SMP Wed Nov 14 22:04:34 UTC 2018 x86_64
                      libc:glibc 2.26 NPTL 2.26 
                    </TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Available physical memory</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>15.5 GiB</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>CPU Type</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>Intel (null) (HT) SSE SSE2 SSE3 SSSE3 SSE4.1 SSE4.2 Core Intel64</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Number of Cores</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>2</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Number of Hardware Threads</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>4</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Number of Sockets</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>1</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>CPU Description</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>Brand: Intel(R) Core(TM) i7-7600U CPU @ 2.80GHz, Vendor: GenuineIntel
Family: &lt;unknown&gt; (0x6), Model: &lt;unknown&gt; (0x8e), Stepping: 0x9
Ext. family: 0x0, Ext. model: 0x8, Type: 0x0, Signature: 0x000806e9
Features: ebx: 0x00100800, ecx: 0x7ffafbff, edx: 0xbfebfbff
Ext. features: eax: 0x00000000, ebx: 0x00000000, ecx: 0x00000121, edx: 0x2c100800
Supports: On-Chip FPU, Virtual Mode Extensions, Debugging Extensions, Page Size Extensions, Time Stamp Counter, Model Specific Registers, Physical Address Extension, Machine Check Exceptions, CMPXCHG8B Instruction, On-Chip APIC, Fast System Call, Memory Type Range Registers, Page Global Enable, Machine Check Architecture, Conditional Mov Instruction, Page Attribute Table, 36-bit Page Size Extension, CLFLUSH Instruction, Debug Trace Store feature, ACPI registers in MSR space, Intel Architecture MMX Technology, Fast Float Point Save and Restore, Streaming SIMD extensions, Streaming SIMD extensions 2, Self-Snoop, Hyper Threading, Thermal Monitor, Streaming SIMD Extensions 3, PCLMULQDQ, 64-bit DS Area, MONITOR/MWAIT instructions, CPL Qualified Debug Store, Virtual Machine Extensions, Safer Mode Extensions, Enhanced Intel SpeedStep technology, Thermal Monitor 2, Supplemental Streaming SIMD Extensions 3, Fused Multiply-Add, CMPXCHG16B, xTPR Update Control, Perfmon and Debug Capability, Process-context identifiers, Streaming SIMD extensions 4.1, Streaming SIMD extensions 4.2, x2APIC, MOVBE, Popcount instruction, TSC-Deadline, AESNI, XSAVE, OSXSAVE, AVX, F16C, LAHF/SAHF instruction support, Advanced Bit Manipulations: LZCNT, SYSCALL/SYSRET, Execute Disable Bit, RDTSCP, Intel 64 Architecture, Invariant TSC</TextListItem>
                  </TextList>
                </TextContent>
              </StackItem>
            </Stack>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
}