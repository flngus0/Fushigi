#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 2, std140) uniform _vp_c1
{
    precise vec4 data[4096];
} vp_c1;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 8) in vec4 in_attr8;
layout (location = 12) in vec4 in_attr12;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    int temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    int temp_95;
    precise float temp_96;
    int temp_97;
    uint temp_98;
    uint temp_99;
    int temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    int temp_104;
    uint temp_105;
    uint temp_106;
    int temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    int temp_133;
    uint temp_134;
    uint temp_135;
    int temp_136;
    precise float temp_137;
    int temp_138;
    uint temp_139;
    int temp_140;
    precise float temp_141;
    precise float temp_142;
    int temp_143;
    uint temp_144;
    uint temp_145;
    int temp_146;
    precise float temp_147;
    int temp_148;
    uint temp_149;
    int temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
    precise float temp_210;
    precise float temp_211;
    precise float temp_212;
    precise float temp_213;
    precise float temp_214;
    precise float temp_215;
    precise float temp_216;
    precise float temp_217;
    precise float temp_218;
    precise float temp_219;
    precise float temp_220;
    precise float temp_221;
    precise float temp_222;
    precise float temp_223;
    precise float temp_224;
    precise float temp_225;
    precise float temp_226;
    precise float temp_227;
    precise float temp_228;
    precise float temp_229;
    precise float temp_230;
    precise float temp_231;
    precise float temp_232;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C9807980CC70000 Mov
    // 0x000010: 0xEFD87F800807FF02 Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4C9807980CD70005 Mov
    // 0x000028: 0xEFD87F800847FF03 Ald
    temp_1 = in_attr0.y;
    // 0x000030: 0x4C6810180CC70000 Fmul
    temp_2 = vp_c6.data[51].x * vp_c6.data[51].x;
    // 0x000038: 0xEFD87F800887FF01 Ald
    temp_3 = in_attr0.z;
    // 0x000048: 0x49A000180CD70500 Ffma
    temp_4 = fma(vp_c6.data[51].y, vp_c6.data[51].y, temp_2);
    // 0x000050: 0xEFD87F801407FF08 Ald
    temp_5 = in_attr12.x;
    // 0x000058: 0x4C9807980CE70005 Mov
    // 0x000068: 0xEFD87F801447FF09 Ald
    temp_6 = in_attr12.y;
    // 0x000070: 0x49A000180CE70504 Ffma
    temp_7 = fma(vp_c6.data[51].z, vp_c6.data[51].z, temp_4);
    // 0x000078: 0xEFD87F801487FF0A Ald
    temp_8 = in_attr12.z;
    // 0x000088: 0x4C68101000470200 Fmul
    temp_9 = temp_0 * vp_c4.data[1].x;
    // 0x000090: 0x5080000000570404 Mufu
    temp_10 = inversesqrt(temp_7);
    // 0x000098: 0x4C68101000070205 Fmul
    temp_11 = temp_0 * vp_c4.data[0].x;
    // 0x0000A8: 0x49A0001000570300 Ffma
    temp_12 = fma(temp_1, vp_c4.data[1].y, temp_9);
    // 0x0000B0: 0x49A0029000170306 Ffma
    temp_13 = fma(temp_1, vp_c4.data[0].y, temp_11);
    // 0x0000B8: 0x4C68101000870205 Fmul
    temp_14 = temp_0 * vp_c4.data[2].x;
    // 0x0000C8: 0x49A0001000670107 Ffma
    temp_15 = fma(temp_3, vp_c4.data[1].z, temp_12);
    // 0x0000D0: 0x4C6810180CC70400 Fmul
    temp_16 = temp_10 * vp_c6.data[51].x;
    // 0x0000D8: 0x49A003100027010C Ffma
    temp_17 = fma(temp_3, vp_c4.data[0].z, temp_13);
    // 0x0000E8: 0x49A0029000970306 Ffma
    temp_18 = fma(temp_1, vp_c4.data[2].y, temp_14);
    // 0x0000F0: 0x4C6810180CE7040B Fmul
    temp_19 = temp_10 * vp_c6.data[51].z;
    // 0x0000F8: 0x4C6810100087080E Fmul
    temp_20 = temp_5 * vp_c4.data[2].x;
    // 0x000108: 0x4C58101000770707 Fadd
    temp_21 = temp_15 + vp_c4.data[1].w;
    // 0x000110: 0x49A100180CF7000D Ffma
    temp_22 = 0.0 - vp_c6.data[51].w;
    temp_23 = fma(temp_16, temp_22, temp_16);
    // 0x000118: 0x4C58101000370C05 Fadd
    temp_24 = temp_17 + vp_c4.data[0].w;
    // 0x000128: 0x49A0031000A70106 Ffma
    temp_25 = fma(temp_3, vp_c4.data[2].z, temp_18);
    // 0x000130: 0x4C6810100047080C Fmul
    temp_26 = temp_5 * vp_c4.data[1].x;
    // 0x000138: 0x5C58300000870202 Fadd
    temp_27 = 0.0 - temp_5;
    temp_28 = temp_0 + temp_27;
    // 0x000148: 0x4C6810140967070F Fmul
    temp_29 = temp_21 * vp_c5.data[37].z;
    // 0x000150: 0x1E23DCCCCCD70D10 Fmul32i
    temp_30 = temp_23 * 0.100000001;
    // 0x000158: 0x49A105980CF70B0D Ffma
    temp_31 = 0.0 - vp_c6.data[51].w;
    temp_32 = fma(temp_19, temp_31, temp_19);
    // 0x000168: 0x4C58101000B70606 Fadd
    temp_33 = temp_25 + vp_c4.data[2].w;
    // 0x000170: 0x49A006100057090C Ffma
    temp_34 = fma(temp_6, vp_c4.data[1].y, temp_26);
    // 0x000178: 0x5C58300000970303 Fadd
    temp_35 = 0.0 - temp_6;
    temp_36 = temp_1 + temp_35;
    // 0x000188: 0x5C68100000270202 Fmul
    temp_37 = temp_28 * temp_28;
    // 0x000190: 0x59A1078001070511 Ffma
    temp_38 = 0.0 - temp_30;
    temp_39 = fma(temp_24, temp_38, temp_29);
    // 0x000198: 0x1E23DCCCCCD70D10 Fmul32i
    temp_40 = temp_32 * 0.100000001;
    // 0x0001A8: 0x4C6810100007080F Fmul
    temp_41 = temp_5 * vp_c4.data[0].x;
    // 0x0001B0: 0x49A007100097090D Ffma
    temp_42 = fma(temp_6, vp_c4.data[2].y, temp_20);
    // 0x0001B8: 0x49A0061000670A0C Ffma
    temp_43 = fma(temp_8, vp_c4.data[1].z, temp_34);
    // 0x0001C8: 0x5C58300000A70101 Fadd
    temp_44 = 0.0 - temp_8;
    temp_45 = temp_3 + temp_44;
    // 0x0001D0: 0x59A0010000370302 Ffma
    temp_46 = fma(temp_36, temp_36, temp_37);
    // 0x0001D8: 0x59A0088001070610 Ffma
    temp_47 = fma(temp_33, temp_40, temp_39);
    // 0x0001E8: 0x4C98079C23070011 Mov
    // 0x0001F0: 0x49A007900017090F Ffma
    temp_48 = fma(temp_6, vp_c4.data[0].y, temp_41);
    // 0x0001F8: 0x49A0069000A70A0D Ffma
    temp_49 = fma(temp_8, vp_c4.data[2].z, temp_42);
    // 0x000208: 0x4C58101000770C0C Fadd
    temp_50 = temp_43 + vp_c4.data[1].w;
    // 0x000210: 0x32A0083F00071111 Ffma
    temp_51 = fma(vp_c7.data[140].x, 0.5, temp_47);
    // 0x000218: 0x49A0079000270A0E Ffma
    temp_52 = fma(temp_8, vp_c4.data[0].z, temp_48);
    // 0x000228: 0x4C58101000B70D0D Fadd
    temp_53 = temp_49 + vp_c4.data[2].w;
    // 0x000230: 0x5C58300000C70710 Fadd
    temp_54 = 0.0 - temp_50;
    temp_55 = temp_21 + temp_54;
    // 0x000238: 0x4C6810180CD7040F Fmul
    temp_56 = temp_10 * vp_c6.data[51].y;
    // 0x000248: 0xEFD87F8014C7FF04 Ald
    temp_57 = in_attr12.w;
    // 0x000250: 0x5C90000001170012 Rro
    // 0x000258: 0x3868104040071114 Fmul
    temp_58 = temp_51 * 3.0;
    // 0x000268: 0x5080000000071212 Mufu
    temp_59 = cos(temp_51);
    // 0x000270: 0x4C58101000370E0E Fadd
    temp_60 = temp_52 + vp_c4.data[0].w;
    // 0x000278: 0x5C58300000D70616 Fadd
    temp_61 = 0.0 - temp_53;
    temp_62 = temp_33 + temp_61;
    // 0x000288: 0x38681040A0071113 Fmul
    temp_63 = temp_51 * 5.0;
    // 0x000290: 0x4C68101409771118 Fmul
    temp_64 = temp_51 * vp_c5.data[37].w;
    // 0x000298: 0x5C59100000D70D0D Fadd
    temp_65 = 0.0 - temp_53;
    temp_66 = temp_65 + temp_53;
    // 0x0002A8: 0x5C90000001470019 Rro
    // 0x0002B0: 0x5C58300000E70515 Fadd
    temp_67 = 0.0 - temp_60;
    temp_68 = temp_24 + temp_67;
    // 0x0002B8: 0x5080000000071911 Mufu
    temp_69 = cos(temp_58);
    // 0x0002C8: 0x59A208000167FF17 Ffma
    temp_70 = 0.0 - temp_55;
    temp_71 = fma(0.0, temp_62, temp_70);
    // 0x0002D0: 0x5C90000001370013 Rro
    // 0x0002D8: 0x5C90000001870018 Rro
    // 0x0002E8: 0x5080000000071313 Mufu
    temp_72 = cos(temp_63);
    // 0x0002F0: 0x5C68100001271212 Fmul
    temp_73 = temp_59 * temp_59;
    // 0x0002F8: 0x59A10A800167FF16 Ffma
    temp_74 = 0.0 - temp_62;
    temp_75 = fma(0.0, temp_74, temp_68);
    // 0x000308: 0x5C68100001770014 Fmul
    temp_76 = temp_16 * temp_71;
    // 0x000310: 0x5080000000171817 Mufu
    temp_77 = sin(temp_64);
    // 0x000318: 0x5C6910000157FF15 Fmul
    temp_78 = 0.0 - temp_68;
    temp_79 = 0.0 * temp_78;
    // 0x000328: 0x59A00A0001670F14 Ffma
    temp_80 = fma(temp_56, temp_75, temp_76);
    // 0x000330: 0x59A00A800107FF15 Ffma
    temp_81 = fma(0.0, temp_55, temp_79);
    // 0x000338: 0x5C68100001171210 Fmul
    temp_82 = temp_73 * temp_69;
    // 0x000348: 0x4CB0119002371A12 F2i
    temp_83 = trunc(vp_c4.data[8].w);
    temp_84 = int(temp_83);
    // 0x000350: 0x4C68101409570411 Fmul
    temp_85 = temp_57 * vp_c5.data[37].y;
    // 0x000358: 0x59A00A0001570B15 Ffma
    temp_86 = fma(temp_19, temp_81, temp_80);
    // 0x000368: 0x5C68120001371010 Fmul
    temp_87 = temp_82 * 0.5;
    temp_88 = temp_87 * temp_72;
    // 0x000370: 0x1E23DCCCCCD71717 Fmul32i
    temp_89 = temp_77 * 0.100000001;
    // 0x000378: 0x4C6810180CF71111 Fmul
    temp_90 = temp_85 * vp_c6.data[51].w;
    // 0x000388: 0x59A0010000170113 Ffma
    temp_91 = fma(temp_45, temp_45, temp_46);
    // 0x000390: 0x5C58100000D70602 Fadd
    temp_92 = temp_33 + temp_66;
    // 0x000398: 0x5080000000871319 Mufu
    temp_93 = sqrt(temp_91);
    // 0x0003A8: 0x59A00B8001071517 Ffma
    temp_94 = fma(temp_86, temp_88, temp_89);
    // 0x0003B0: 0x3848000000471212 Shl
    temp_95 = temp_84 << 4;
    // 0x0003B8: 0x59A001000077FF14 Ffma
    temp_96 = fma(0.0, temp_21, temp_92);
    // 0x0003C8: 0xEF9400704887120A Ldc
    temp_97 = temp_95 + 0x488;
    temp_98 = uint(temp_97) >> 2;
    temp_99 = temp_98 >> 2;
    temp_100 = int(temp_98) & 3;
    temp_101 = vp_c7.data[int(temp_99)][temp_100];
    // 0x0003D0: 0x5C68100001771117 Fmul
    temp_102 = temp_90 * temp_94;
    // 0x0003D8: 0x5C68100001970B16 Fmul
    temp_103 = temp_19 * temp_93;
    // 0x0003E8: 0xEF9400706887120B Ldc
    temp_104 = temp_95 + 0x688;
    temp_105 = uint(temp_104) >> 2;
    temp_106 = temp_105 >> 2;
    temp_107 = int(temp_105) & 3;
    temp_108 = vp_c7.data[int(temp_106)][temp_107];
    // 0x0003F0: 0x5C90000001770017 Rro
    // 0x0003F8: 0x59A10A000057FF14 Ffma
    temp_109 = 0.0 - temp_24;
    temp_110 = fma(0.0, temp_109, temp_96);
    // 0x000408: 0x5080000000171708 Mufu
    temp_111 = sin(temp_102);
    // 0x000410: 0x5C68100001671115 Fmul
    temp_112 = temp_90 * temp_103;
    // 0x000418: 0x5080000000071709 Mufu
    temp_113 = cos(temp_102);
    // 0x000428: 0x5C68100001970F16 Fmul
    temp_114 = temp_56 * temp_93;
    // 0x000430: 0x5C6810000197000F Fmul
    temp_115 = temp_16 * temp_93;
    // 0x000438: 0x5C68100001571015 Fmul
    temp_116 = temp_88 * temp_112;
    // 0x000448: 0x5C68100001671116 Fmul
    temp_117 = temp_90 * temp_114;
    // 0x000450: 0x5C68100000F7110F Fmul
    temp_118 = temp_90 * temp_115;
    // 0x000458: 0x5C69100000870C03 Fmul
    temp_119 = 0.0 - temp_111;
    temp_120 = temp_50 * temp_119;
    // 0x000468: 0x49A00A0400071514 Ffma
    temp_121 = fma(temp_116, vp_c1.data[0].x, temp_110);
    // 0x000470: 0x5C68100000970C01 Fmul
    temp_122 = temp_50 * temp_113;
    // 0x000478: 0x5C68100000F7100F Fmul
    temp_123 = temp_88 * temp_118;
    // 0x000488: 0x5C68100001671010 Fmul
    temp_124 = temp_88 * temp_117;
    // 0x000490: 0x59A3018000970E03 Ffma
    temp_125 = 0.0 - temp_113;
    temp_126 = 0.0 - temp_120;
    temp_127 = fma(temp_60, temp_125, temp_126);
    // 0x000498: 0x59A0058000A7140A Ffma
    temp_128 = fma(temp_121, temp_101, temp_108);
    // 0x0004A8: 0x59A3008000870E01 Ffma
    temp_129 = 0.0 - temp_111;
    temp_130 = 0.0 - temp_122;
    temp_131 = fma(temp_60, temp_129, temp_130);
    // 0x0004B0: 0x5C58100000370E0D Fadd
    temp_132 = temp_60 + temp_127;
    // 0x0004B8: 0xEF95007048071202 Ldc
    temp_133 = temp_95 + 0x480;
    temp_134 = uint(temp_133) >> 2;
    temp_135 = temp_134 >> 2;
    temp_136 = int(temp_134) & 3;
    temp_137 = vp_c7.data[int(temp_135)][temp_136];
    temp_138 = int(temp_134) + 1;
    temp_139 = uint(temp_138) >> 2;
    temp_140 = temp_138 & 3;
    temp_141 = vp_c7.data[int(temp_139)][temp_140];
    // 0x0004C8: 0x5C58100000170C13 Fadd
    temp_142 = temp_50 + temp_131;
    // 0x0004D0: 0xEF95007068071200 Ldc
    temp_143 = temp_95 + 0x680;
    temp_144 = uint(temp_143) >> 2;
    temp_145 = temp_144 >> 2;
    temp_146 = int(temp_144) & 3;
    temp_147 = vp_c7.data[int(temp_145)][temp_146];
    temp_148 = int(temp_144) + 1;
    temp_149 = uint(temp_148) >> 2;
    temp_150 = temp_148 & 3;
    temp_151 = vp_c7.data[int(temp_149)][temp_150];
    // 0x0004D8: 0x59A006800067FF0E Ffma
    temp_152 = fma(0.0, temp_33, temp_132);
    // 0x0004E8: 0xEFD87F801047FF0C Ald
    temp_153 = in_attr8.y;
    // 0x0004F0: 0x59A009800067FF06 Ffma
    temp_154 = fma(0.0, temp_33, temp_142);
    // 0x0004F8: 0xEFD87F801007FF0D Ald
    temp_155 = in_attr8.x;
    // 0x000508: 0x59A107000087070E Ffma
    temp_156 = 0.0 - temp_111;
    temp_157 = fma(temp_21, temp_156, temp_152);
    // 0x000510: 0xEFF07F8008C7FF04 Ast
    out_attr0.w = temp_57;
    // 0x000518: 0x59A0030000970706 Ffma
    temp_158 = fma(temp_21, temp_113, temp_154);
    // 0x000528: 0x4C98079400270007 Mov
    // 0x000530: 0x59A007000097050E Ffma
    temp_159 = fma(temp_24, temp_113, temp_157);
    // 0x000538: 0x4C98079400370009 Mov
    // 0x000548: 0x59A0030000870506 Ffma
    temp_160 = fma(temp_24, temp_111, temp_158);
    // 0x000550: 0x4C5810180BA70A05 Fadd
    temp_161 = temp_128 + vp_c6.data[46].z;
    // 0x000558: 0x49A0070400070F0F Ffma
    temp_162 = fma(temp_123, vp_c1.data[0].x, temp_159);
    // 0x000568: 0x49A0030400071006 Ffma
    temp_163 = fma(temp_124, vp_c1.data[0].x, temp_160);
    // 0x000570: 0x4C6810180C27050B Fmul
    temp_164 = temp_161 * vp_c6.data[48].z;
    // 0x000578: 0x51A0039400470C07 Ffma
    temp_165 = fma(temp_153, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000588: 0x51A0049400570C0C Ffma
    temp_166 = fma(temp_153, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000590: 0x59A0000000270F02 Ffma
    temp_167 = fma(temp_162, temp_137, temp_147);
    // 0x000598: 0x4C6810180CA7050E Fmul
    temp_168 = temp_161 * vp_c6.data[50].z;
    // 0x0005A8: 0x59A0008000370601 Ffma
    temp_169 = fma(temp_163, temp_141, temp_151);
    // 0x0005B0: 0x49A0039400070D00 Ffma
    temp_170 = fma(temp_155, vp_c5.data[0].x, temp_165);
    // 0x0005B8: 0x49A0061400170D0D Ffma
    temp_171 = fma(temp_155, vp_c5.data[0].y, temp_166);
    // 0x0005C8: 0xEFF07F800A07FF00 Ast
    out_attr2.x = temp_170;
    // 0x0005D0: 0x4C68100C00070208 Fmul
    temp_172 = temp_167 * vp_c3.data[0].x;
    // 0x0005D8: 0xEFF07F800A47FF0D Ast
    out_attr2.y = temp_171;
    // 0x0005E8: 0x4C68100C00470206 Fmul
    temp_173 = temp_167 * vp_c3.data[1].x;
    // 0x0005F0: 0x4C5830180B070209 Fadd
    temp_174 = 0.0 - vp_c6.data[44].x;
    temp_175 = temp_167 + temp_174;
    // 0x0005F8: 0x4C6810180C67050C Fmul
    temp_176 = temp_161 * vp_c6.data[49].z;
    // 0x000608: 0x4C68100C00870203 Fmul
    temp_177 = temp_167 * vp_c3.data[2].x;
    // 0x000610: 0x4C5810180B970105 Fadd
    temp_178 = temp_169 + vp_c6.data[46].y;
    // 0x000618: 0x49A0040C00170108 Ffma
    temp_179 = fma(temp_169, vp_c3.data[0].y, temp_172);
    // 0x000628: 0x49A0030C00570107 Ffma
    temp_180 = fma(temp_169, vp_c3.data[1].y, temp_173);
    // 0x000630: 0x4C5830180B170106 Fadd
    temp_181 = 0.0 - vp_c6.data[44].y;
    temp_182 = temp_169 + temp_181;
    // 0x000638: 0x4C6810180387090F Fmul
    temp_183 = temp_175 * vp_c6.data[14].x;
    // 0x000648: 0x49A0018C00970103 Ffma
    temp_184 = fma(temp_169, vp_c3.data[2].y, temp_177);
    // 0x000650: 0x4C58101002070A01 Fadd
    temp_185 = temp_128 + vp_c4.data[8].x;
    // 0x000658: 0x49A006180C57050C Ffma
    temp_186 = fma(temp_178, vp_c6.data[49].y, temp_176);
    // 0x000668: 0x49A005980C17050B Ffma
    temp_187 = fma(temp_178, vp_c6.data[48].y, temp_164);
    // 0x000670: 0x49A007180C970509 Ffma
    temp_188 = fma(temp_178, vp_c6.data[50].y, temp_168);
    // 0x000678: 0x49A0040C00270A05 Ffma
    temp_189 = fma(temp_128, vp_c3.data[0].z, temp_179);
    // 0x000688: 0x49A007980397060F Ffma
    temp_190 = fma(temp_182, vp_c6.data[14].y, temp_183);
    // 0x000690: 0x4C5810180B870206 Fadd
    temp_191 = temp_167 + vp_c6.data[46].x;
    // 0x000698: 0x49A0038C00670102 Ffma
    temp_192 = fma(temp_185, vp_c3.data[1].z, temp_180);
    // 0x0006A8: 0x49A0038C00670A07 Ffma
    temp_193 = fma(temp_128, vp_c3.data[1].z, temp_180);
    // 0x0006B0: 0x49A0040C00270108 Ffma
    temp_194 = fma(temp_185, vp_c3.data[0].z, temp_179);
    // 0x0006B8: 0x4C58100C00370505 Fadd
    temp_195 = temp_189 + vp_c3.data[0].w;
    // 0x0006C8: 0x49A0018C00A70101 Ffma
    temp_196 = fma(temp_185, vp_c3.data[2].z, temp_184);
    // 0x0006D0: 0x49A0018C00A70A03 Ffma
    temp_197 = fma(temp_128, vp_c3.data[2].z, temp_184);
    // 0x0006D8: 0x4C58100C00770202 Fadd
    temp_198 = temp_192 + vp_c3.data[1].w;
    // 0x0006E8: 0x4C58100C00770707 Fadd
    temp_199 = temp_193 + vp_c3.data[1].w;
    // 0x0006F0: 0x4C58100C00370808 Fadd
    temp_200 = temp_194 + vp_c3.data[0].w;
    // 0x0006F8: 0x4C68101802C70505 Fmul
    temp_201 = temp_195 * vp_c6.data[11].x;
    // 0x000708: 0x4C5830180B270A0A Fadd
    temp_202 = 0.0 - vp_c6.data[44].z;
    temp_203 = temp_128 + temp_202;
    // 0x000710: 0x4C58100C00B70303 Fadd
    temp_204 = temp_197 + vp_c3.data[2].w;
    // 0x000718: 0x4C58100C00B70101 Fadd
    temp_205 = temp_196 + vp_c3.data[2].w;
    // 0x000728: 0xEFF07F800987FF03 Ast
    out_attr1.z = temp_204;
    // 0x000730: 0x49A0029802D70705 Ffma
    temp_206 = fma(temp_199, vp_c6.data[11].y, temp_201);
    // 0x000738: 0x4C68100C02470800 Fmul
    temp_207 = temp_200 * vp_c3.data[9].x;
    // 0x000748: 0x4C68100C01C70804 Fmul
    temp_208 = temp_200 * vp_c3.data[7].x;
    // 0x000750: 0x4C68100C02870807 Fmul
    temp_209 = temp_200 * vp_c3.data[10].x;
    // 0x000758: 0x4C68100C02070808 Fmul
    temp_210 = temp_200 * vp_c3.data[8].x;
    // 0x000768: 0x49A006180C47060C Ffma
    temp_211 = fma(temp_191, vp_c6.data[49].x, temp_186);
    // 0x000770: 0x49A004980C870609 Ffma
    temp_212 = fma(temp_191, vp_c6.data[50].x, temp_188);
    // 0x000778: 0x49A0000C02570200 Ffma
    temp_213 = fma(temp_198, vp_c3.data[9].y, temp_207);
    // 0x000788: 0x49A0020C01D70204 Ffma
    temp_214 = fma(temp_198, vp_c3.data[7].y, temp_208);
    // 0x000790: 0x49A0038C02970207 Ffma
    temp_215 = fma(temp_198, vp_c3.data[10].y, temp_209);
    // 0x000798: 0x49A0040C02170208 Ffma
    temp_216 = fma(temp_198, vp_c3.data[8].y, temp_210);
    // 0x0007A8: 0x49A005980C07060B Ffma
    temp_217 = fma(temp_191, vp_c6.data[48].x, temp_187);
    // 0x0007B0: 0x49A0079803A70A0A Ffma
    temp_218 = fma(temp_203, vp_c6.data[14].z, temp_190);
    // 0x0007B8: 0x4C98079803070006 Mov
    // 0x0007C8: 0x4C98079803C7000D Mov
    // 0x0007D0: 0x49A0029802E70305 Ffma
    temp_219 = fma(temp_204, vp_c6.data[11].z, temp_206);
    // 0x0007D8: 0x49A0000C02670100 Ffma
    temp_220 = fma(temp_205, vp_c3.data[9].z, temp_213);
    // 0x0007E8: 0x49A0020C01E70104 Ffma
    temp_221 = fma(temp_205, vp_c3.data[7].z, temp_214);
    // 0x0007F0: 0x49A0038C02A70107 Ffma
    temp_222 = fma(temp_205, vp_c3.data[10].z, temp_215);
    // 0x0007F8: 0x49A0040C02270108 Ffma
    temp_223 = fma(temp_205, vp_c3.data[8].z, temp_216);
    // 0x000808: 0x4C6810180BB70C0C Fmul
    temp_224 = temp_211 * vp_c6.data[46].w;
    // 0x000810: 0x4C6810180BB70B0B Fmul
    temp_225 = temp_217 * vp_c6.data[46].w;
    // 0x000818: 0xEFF07F800C47FF0C Ast
    out_attr4.y = temp_224;
    // 0x000828: 0x4C6810180BB70909 Fmul
    temp_226 = temp_212 * vp_c6.data[46].w;
    // 0x000830: 0xEFF07F800C07FF0B Ast
    out_attr4.x = temp_225;
    // 0x000838: 0x51A0069803B70A0A Ffma
    temp_227 = fma(temp_218, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000848: 0xEFF07F800C87FF09 Ast
    out_attr4.z = temp_226;
    // 0x000850: 0x51A0031802F70505 Ffma
    temp_228 = fma(temp_219, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000858: 0xEFF07F800B47FF0A Ast
    out_attr3.y = temp_227;
    // 0x000868: 0x4C58100C02770000 Fadd
    temp_229 = temp_220 + vp_c3.data[9].w;
    // 0x000870: 0xEFF07F800B07FF05 Ast
    out_attr3.x = temp_228;
    // 0x000878: 0x4C58100C01F70404 Fadd
    temp_230 = temp_221 + vp_c3.data[7].w;
    // 0x000888: 0xEFF07F800787FF00 Ast
    gl_Position.z = temp_229;
    // 0x000890: 0x4C58100C02B70707 Fadd
    temp_231 = temp_222 + vp_c3.data[10].w;
    // 0x000898: 0xEFF07F800707FF04 Ast
    gl_Position.x = temp_230;
    // 0x0008A8: 0x4C58100C02370808 Fadd
    temp_232 = temp_223 + vp_c3.data[8].w;
    // 0x0008B0: 0xEFF07F8007C7FF07 Ast
    gl_Position.w = temp_231;
    // 0x0008B8: 0xEFF07F800747FF08 Ast
    gl_Position.y = temp_232;
    // 0x0008C8: 0xE30000000007000F Exit
    return;
}
