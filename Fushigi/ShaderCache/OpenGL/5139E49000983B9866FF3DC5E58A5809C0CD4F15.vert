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

layout (binding = 9, std140) uniform _vp_c8
{
    precise vec4 data[4096];
} vp_c8;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 6) in vec4 in_attr6;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;
layout (location = 8) out vec4 out_attr8;
layout (location = 9) out vec4 out_attr9;


void main()
{
    precise float temp_0;
    precise float temp_1;
    int temp_2;
    precise float temp_3;
    precise float temp_4;
    int temp_5;
    precise float temp_6;
    int temp_7;
    int temp_8;
    int temp_9;
    precise float temp_10;
    uint temp_11;
    int temp_12;
    int temp_13;
    int temp_14;
    int temp_15;
    uint temp_16;
    uint temp_17;
    int temp_18;
    precise float temp_19;
    int temp_20;
    uint temp_21;
    int temp_22;
    precise float temp_23;
    int temp_24;
    uint temp_25;
    uint temp_26;
    int temp_27;
    precise float temp_28;
    int temp_29;
    uint temp_30;
    int temp_31;
    precise float temp_32;
    precise float temp_33;
    int temp_34;
    uint temp_35;
    uint temp_36;
    int temp_37;
    precise float temp_38;
    int temp_39;
    uint temp_40;
    int temp_41;
    precise float temp_42;
    uint temp_43;
    uint temp_44;
    int temp_45;
    precise float temp_46;
    int temp_47;
    uint temp_48;
    int temp_49;
    precise float temp_50;
    int temp_51;
    uint temp_52;
    uint temp_53;
    int temp_54;
    precise float temp_55;
    int temp_56;
    uint temp_57;
    int temp_58;
    precise float temp_59;
    int temp_60;
    uint temp_61;
    uint temp_62;
    int temp_63;
    precise float temp_64;
    int temp_65;
    uint temp_66;
    int temp_67;
    precise float temp_68;
    int temp_69;
    uint temp_70;
    uint temp_71;
    int temp_72;
    precise float temp_73;
    int temp_74;
    uint temp_75;
    int temp_76;
    precise float temp_77;
    int temp_78;
    uint temp_79;
    uint temp_80;
    int temp_81;
    precise float temp_82;
    int temp_83;
    uint temp_84;
    int temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    int temp_89;
    uint temp_90;
    uint temp_91;
    int temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    int temp_105;
    uint temp_106;
    uint temp_107;
    int temp_108;
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
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise float temp_150;
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
    precise float temp_233;
    precise float temp_234;
    precise float temp_235;
    precise float temp_236;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x010000000107F017 Mov32i
    // 0x000010: 0xEFD87F800E07FF00 Ald
    temp_0 = in_attr6.x;
    // 0x000018: 0x4CB0119002371A1E F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000028: 0x4C9807940027001F Mov
    // 0x000030: 0xEFD87F800807FF1D Ald
    temp_3 = in_attr0.x;
    // 0x000038: 0x4C98079400370013 Mov
    // 0x000048: 0xEFD87F800847FF1A Ald
    temp_4 = in_attr0.y;
    // 0x000050: 0x3848000000471E1E Shl
    temp_5 = temp_2 << 4;
    // 0x000058: 0xEFD87F800887FF19 Ald
    temp_6 = in_attr0.z;
    // 0x000068: 0x36000B8003070017 Xmad
    temp_7 = floatBitsToInt(temp_0) & 0xFFFF;
    temp_8 = temp_7 * 48;
    temp_9 = temp_8 + 16;
    // 0x000070: 0xEFD87F801047FF1B Ald
    temp_10 = in_attr8.y;
    // 0x000078: 0x36200B9003070017 Xmad
    temp_11 = floatBitsToUint(temp_0) >> 16;
    temp_12 = int(temp_11) * 48;
    temp_13 = temp_12 << 16;
    temp_14 = temp_13 + temp_9;
    // 0x000088: 0xEF95007068071E0C Ldc
    temp_15 = temp_5 + 0x680;
    temp_16 = uint(temp_15) >> 2;
    temp_17 = temp_16 >> 2;
    temp_18 = int(temp_16) & 3;
    temp_19 = vp_c7.data[int(temp_17)][temp_18];
    temp_20 = int(temp_16) + 1;
    temp_21 = uint(temp_20) >> 2;
    temp_22 = temp_20 & 3;
    temp_23 = vp_c7.data[int(temp_21)][temp_22];
    // 0x000090: 0xEF95007048071E0E Ldc
    temp_24 = temp_5 + 0x480;
    temp_25 = uint(temp_24) >> 2;
    temp_26 = temp_25 >> 2;
    temp_27 = int(temp_25) & 3;
    temp_28 = vp_c7.data[int(temp_26)][temp_27];
    temp_29 = int(temp_25) + 1;
    temp_30 = uint(temp_29) >> 2;
    temp_31 = temp_29 & 3;
    temp_32 = vp_c7.data[int(temp_30)][temp_31];
    // 0x000098: 0xEFD87F801007FF18 Ald
    temp_33 = in_attr8.x;
    // 0x0000A8: 0xEF95008FFF071704 Ldc
    temp_34 = temp_14 + -16;
    temp_35 = uint(temp_34) >> 2;
    temp_36 = temp_35 >> 2;
    temp_37 = int(temp_35) & 3;
    temp_38 = vp_c8.data[int(temp_36)][temp_37];
    temp_39 = int(temp_35) + 1;
    temp_40 = uint(temp_39) >> 2;
    temp_41 = temp_39 & 3;
    temp_42 = vp_c8.data[int(temp_40)][temp_41];
    // 0x0000B0: 0xEF95008000071708 Ldc
    temp_43 = uint(temp_14) >> 2;
    temp_44 = temp_43 >> 2;
    temp_45 = int(temp_43) & 3;
    temp_46 = vp_c8.data[int(temp_44)][temp_45];
    temp_47 = int(temp_43) + 1;
    temp_48 = uint(temp_47) >> 2;
    temp_49 = temp_47 & 3;
    temp_50 = vp_c8.data[int(temp_48)][temp_49];
    // 0x0000B8: 0xEF95008001071702 Ldc
    temp_51 = temp_14 + 16;
    temp_52 = uint(temp_51) >> 2;
    temp_53 = temp_52 >> 2;
    temp_54 = int(temp_52) & 3;
    temp_55 = vp_c8.data[int(temp_53)][temp_54];
    temp_56 = int(temp_52) + 1;
    temp_57 = uint(temp_56) >> 2;
    temp_58 = temp_56 & 3;
    temp_59 = vp_c8.data[int(temp_57)][temp_58];
    // 0x0000C8: 0xEF95008FFF87170A Ldc
    temp_60 = temp_14 + -8;
    temp_61 = uint(temp_60) >> 2;
    temp_62 = temp_61 >> 2;
    temp_63 = int(temp_61) & 3;
    temp_64 = vp_c8.data[int(temp_62)][temp_63];
    temp_65 = int(temp_61) + 1;
    temp_66 = uint(temp_65) >> 2;
    temp_67 = temp_65 & 3;
    temp_68 = vp_c8.data[int(temp_66)][temp_67];
    // 0x0000D0: 0xEF95008000871706 Ldc
    temp_69 = temp_14 + 8;
    temp_70 = uint(temp_69) >> 2;
    temp_71 = temp_70 >> 2;
    temp_72 = int(temp_70) & 3;
    temp_73 = vp_c8.data[int(temp_71)][temp_72];
    temp_74 = int(temp_70) + 1;
    temp_75 = uint(temp_74) >> 2;
    temp_76 = temp_74 & 3;
    temp_77 = vp_c8.data[int(temp_75)][temp_76];
    // 0x0000D8: 0xEF95008001871700 Ldc
    temp_78 = temp_14 + 24;
    temp_79 = uint(temp_78) >> 2;
    temp_80 = temp_79 >> 2;
    temp_81 = int(temp_79) & 3;
    temp_82 = vp_c8.data[int(temp_80)][temp_81];
    temp_83 = int(temp_79) + 1;
    temp_84 = uint(temp_83) >> 2;
    temp_85 = temp_83 & 3;
    temp_86 = vp_c8.data[int(temp_84)][temp_85];
    // 0x0000E8: 0xEFD87F800A07FF15 Ald
    temp_87 = in_attr2.x;
    // 0x0000F0: 0xEFD87F800907FF11 Ald
    temp_88 = in_attr1.x;
    // 0x0000F8: 0xEF94007048871E17 Ldc
    temp_89 = temp_5 + 0x488;
    temp_90 = uint(temp_89) >> 2;
    temp_91 = temp_90 >> 2;
    temp_92 = int(temp_90) & 3;
    temp_93 = vp_c7.data[int(temp_91)][temp_92];
    // 0x000108: 0xEFD87F800A47FF16 Ald
    temp_94 = in_attr2.y;
    // 0x000110: 0xEFD87F800947FF14 Ald
    temp_95 = in_attr1.y;
    // 0x000118: 0x5C68100001D7041C Fmul
    temp_96 = temp_38 * temp_3;
    // 0x000128: 0x5C68100001D70810 Fmul
    temp_97 = temp_46 * temp_3;
    // 0x000130: 0x5C68100001D70212 Fmul
    temp_98 = temp_55 * temp_3;
    // 0x000138: 0x51A00F9400471B1D Ffma
    temp_99 = fma(temp_10, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000148: 0x51A0099400571B1B Ffma
    temp_100 = fma(temp_10, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000150: 0xEFD87F800A87FF13 Ald
    temp_101 = in_attr2.z;
    // 0x000158: 0x59A00E0001A7051C Ffma
    temp_102 = fma(temp_42, temp_4, temp_96);
    // 0x000168: 0x59A0080001A70910 Ffma
    temp_103 = fma(temp_50, temp_4, temp_97);
    // 0x000170: 0x59A0090001A7031A Ffma
    temp_104 = fma(temp_59, temp_4, temp_98);
    // 0x000178: 0xEF94007068871E12 Ldc
    temp_105 = temp_5 + 0x688;
    temp_106 = uint(temp_105) >> 2;
    temp_107 = temp_106 >> 2;
    temp_108 = int(temp_106) & 3;
    temp_109 = vp_c7.data[int(temp_107)][temp_108];
    // 0x000188: 0x49A00E940007181D Ffma
    temp_110 = fma(temp_33, vp_c5.data[0].x, temp_99);
    // 0x000190: 0x49A00D940017181B Ffma
    temp_111 = fma(temp_33, vp_c5.data[0].y, temp_100);
    // 0x000198: 0x5C68100001570418 Fmul
    temp_112 = temp_38 * temp_87;
    // 0x0001A8: 0x59A00E0001970A1C Ffma
    temp_113 = fma(temp_64, temp_6, temp_102);
    // 0x0001B0: 0x59A0080001970610 Ffma
    temp_114 = fma(temp_73, temp_6, temp_103);
    // 0x0001B8: 0x59A00D000197001A Ffma
    temp_115 = fma(temp_82, temp_6, temp_104);
    // 0x0001C8: 0x5C58100001C70B1F Fadd
    temp_116 = temp_68 + temp_113;
    // 0x0001D0: 0xEFD87F800987FF0B Ald
    temp_117 = in_attr1.z;
    // 0x0001D8: 0x5C58100001070710 Fadd
    temp_118 = temp_77 + temp_114;
    // 0x0001E8: 0x5C68100001570807 Fmul
    temp_119 = temp_46 * temp_87;
    // 0x0001F0: 0x5C58100001A70101 Fadd
    temp_120 = temp_86 + temp_115;
    // 0x0001F8: 0x59A0060000E71F0C Ffma
    temp_121 = fma(temp_116, temp_28, temp_19);
    // 0x000208: 0x5C6810000117041F Fmul
    temp_122 = temp_38 * temp_88;
    // 0x000210: 0x5C68100001570204 Fmul
    temp_123 = temp_55 * temp_87;
    // 0x000218: 0x59A0068000F7100D Ffma
    temp_124 = fma(temp_118, temp_32, temp_23);
    // 0x000228: 0x5C68100001170202 Fmul
    temp_125 = temp_55 * temp_88;
    // 0x000230: 0x5C6810000117080E Fmul
    temp_126 = temp_46 * temp_88;
    // 0x000238: 0x4C5830180B070C0F Fadd
    temp_127 = 0.0 - vp_c6.data[44].x;
    temp_128 = temp_121 + temp_127;
    // 0x000248: 0x59A00C0001670508 Ffma
    temp_129 = fma(temp_42, temp_94, temp_112);
    // 0x000250: 0x59A00F8001470505 Ffma
    temp_130 = fma(temp_42, temp_95, temp_122);
    // 0x000258: 0x59A0020001670311 Ffma
    temp_131 = fma(temp_59, temp_94, temp_123);
    // 0x000268: 0x59A0038001670904 Ffma
    temp_132 = fma(temp_50, temp_94, temp_119);
    // 0x000270: 0x59A0090001770112 Ffma
    temp_133 = fma(temp_120, temp_93, temp_109);
    // 0x000278: 0xEFD87F800AC7FF01 Ald
    temp_134 = in_attr2.w;
    // 0x000288: 0x4C5830180B170D07 Fadd
    temp_135 = 0.0 - vp_c6.data[44].y;
    temp_136 = temp_124 + temp_135;
    // 0x000290: 0xEFF07F800D07FF0C Ast
    out_attr5.x = temp_121;
    // 0x000298: 0x4C68101803870F10 Fmul
    temp_137 = temp_128 * vp_c6.data[14].x;
    // 0x0002A8: 0xEFF07F800D47FF0D Ast
    out_attr5.y = temp_124;
    // 0x0002B0: 0x59A0010001470315 Ffma
    temp_138 = fma(temp_59, temp_95, temp_125);
    // 0x0002B8: 0xEFF07F800E07FF1D Ast
    out_attr6.x = temp_110;
    // 0x0002C8: 0x59A0040001370A02 Ffma
    temp_139 = fma(temp_64, temp_101, temp_129);
    // 0x0002D0: 0xEFF07F800E47FF1B Ast
    out_attr6.y = temp_111;
    // 0x0002D8: 0x59A0070001470909 Ffma
    temp_140 = fma(temp_50, temp_95, temp_126);
    // 0x0002E8: 0xEFF07F800D87FF12 Ast
    out_attr5.z = temp_133;
    // 0x0002F0: 0x59A0028000B70A0A Ffma
    temp_141 = fma(temp_64, temp_117, temp_130);
    // 0x0002F8: 0x4C5810180BA71205 Fadd
    temp_142 = temp_133 + vp_c6.data[46].z;
    // 0x000308: 0x49A008180397070E Ffma
    temp_143 = fma(temp_136, vp_c6.data[14].y, temp_137);
    // 0x000310: 0x4C5830180B271208 Fadd
    temp_144 = 0.0 - vp_c6.data[44].z;
    temp_145 = temp_133 + temp_144;
    // 0x000318: 0x59A0088001370003 Ffma
    temp_146 = fma(temp_82, temp_101, temp_131);
    // 0x000328: 0x59A00A8000B70000 Ffma
    temp_147 = fma(temp_82, temp_117, temp_138);
    // 0x000330: 0x59A0020001370613 Ffma
    temp_148 = fma(temp_73, temp_101, temp_132);
    // 0x000338: 0x59A0048000B7060B Ffma
    temp_149 = fma(temp_73, temp_117, temp_140);
    // 0x000348: 0x4C5810180B970D06 Fadd
    temp_150 = temp_124 + vp_c6.data[46].y;
    // 0x000350: 0x4C6810180C270507 Fmul
    temp_151 = temp_142 * vp_c6.data[48].z;
    // 0x000358: 0x49A0071803A7080E Ffma
    temp_152 = fma(temp_145, vp_c6.data[14].z, temp_143);
    // 0x000368: 0x4C98079803C7000F Mov
    // 0x000370: 0x5C68100000270208 Fmul
    temp_153 = temp_139 * temp_139;
    // 0x000378: 0x4C5810180B870C04 Fadd
    temp_154 = temp_121 + vp_c6.data[46].x;
    // 0x000388: 0x5C68100000A70A09 Fmul
    temp_155 = temp_141 * temp_141;
    // 0x000390: 0x49A003980C170607 Ffma
    temp_156 = fma(temp_150, vp_c6.data[48].y, temp_151);
    // 0x000398: 0x4C58300C02F70C10 Fadd
    temp_157 = 0.0 - vp_c3.data[11].w;
    temp_158 = temp_121 + temp_157;
    // 0x0003A8: 0x51A0079803B70E16 Ffma
    temp_159 = fma(temp_152, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x0003B0: 0xEFF07F800B07FF10 Ast
    out_attr3.x = temp_158;
    // 0x0003B8: 0x59A0040001371308 Ffma
    temp_160 = fma(temp_148, temp_148, temp_153);
    // 0x0003C8: 0xEFF07F801047FF16 Ast
    out_attr8.y = temp_159;
    // 0x0003D0: 0x4C6810180C67050F Fmul
    temp_161 = temp_142 * vp_c6.data[49].z;
    // 0x0003D8: 0x49A003980C07040E Ffma
    temp_162 = fma(temp_154, vp_c6.data[48].x, temp_156);
    // 0x0003E8: 0x59A0048000B70B07 Ffma
    temp_163 = fma(temp_149, temp_149, temp_155);
    // 0x0003F0: 0x4C58300C03771214 Fadd
    temp_164 = 0.0 - vp_c3.data[13].w;
    temp_165 = temp_133 + temp_164;
    // 0x0003F8: 0x4C58300C03370D11 Fadd
    temp_166 = 0.0 - vp_c3.data[12].w;
    temp_167 = temp_124 + temp_166;
    // 0x000408: 0xEFF07F800B87FF14 Ast
    out_attr3.z = temp_165;
    // 0x000410: 0x59A0040000370309 Ffma
    temp_168 = fma(temp_146, temp_146, temp_160);
    // 0x000418: 0xEFF07F800B47FF11 Ast
    out_attr3.y = temp_167;
    // 0x000428: 0x49A007980C57060F Ffma
    temp_169 = fma(temp_150, vp_c6.data[49].y, temp_161);
    // 0x000430: 0x5080000000570909 Mufu
    temp_170 = inversesqrt(temp_168);
    // 0x000438: 0x59A0038000070010 Ffma
    temp_171 = fma(temp_147, temp_147, temp_163);
    // 0x000448: 0x4C68100C00470C07 Fmul
    temp_172 = temp_121 * vp_c3.data[1].x;
    // 0x000450: 0x5080000000571011 Mufu
    temp_173 = inversesqrt(temp_171);
    // 0x000458: 0x49A007980C470414 Ffma
    temp_174 = fma(temp_154, vp_c6.data[49].x, temp_169);
    // 0x000468: 0x4C6810180BB70E15 Fmul
    temp_175 = temp_162 * vp_c6.data[46].w;
    // 0x000470: 0x4C68100C00870C08 Fmul
    temp_176 = temp_121 * vp_c3.data[2].x;
    // 0x000478: 0xEFF07F801107FF15 Ast
    out_attr9.x = temp_175;
    // 0x000488: 0x4C68100C00070C0E Fmul
    temp_177 = temp_121 * vp_c3.data[0].x;
    // 0x000490: 0x49A0038C00570D0F Ffma
    temp_178 = fma(temp_124, vp_c3.data[1].y, temp_172);
    // 0x000498: 0x4C6810180BB71416 Fmul
    temp_179 = temp_174 * vp_c6.data[46].w;
    // 0x0004A8: 0x4C6810180CA70514 Fmul
    temp_180 = temp_142 * vp_c6.data[50].z;
    // 0x0004B0: 0xEFF07F801147FF16 Ast
    out_attr9.y = temp_179;
    // 0x0004B8: 0x49A0040C00970D07 Ffma
    temp_181 = fma(temp_124, vp_c3.data[2].y, temp_176);
    // 0x0004C8: 0x49A0070C00170D08 Ffma
    temp_182 = fma(temp_124, vp_c3.data[0].y, temp_177);
    // 0x0004D0: 0x5C68100000970202 Fmul
    temp_183 = temp_139 * temp_170;
    // 0x0004D8: 0x5C68100000971313 Fmul
    temp_184 = temp_148 * temp_170;
    // 0x0004E8: 0xEFF07F800907FF02 Ast
    out_attr1.x = temp_183;
    // 0x0004F0: 0x5C6810000097030C Fmul
    temp_185 = temp_146 * temp_170;
    // 0x0004F8: 0xEFF07F800947FF13 Ast
    out_attr1.y = temp_184;
    // 0x000508: 0x4C58101002071209 Fadd
    temp_186 = temp_133 + vp_c4.data[8].x;
    // 0x000510: 0xEFF07F800987FF0C Ast
    out_attr1.z = temp_185;
    // 0x000518: 0x49A00A180C97060D Ffma
    temp_187 = fma(temp_150, vp_c6.data[50].y, temp_180);
    // 0x000528: 0x5C68100001170A0A Fmul
    temp_188 = temp_141 * temp_173;
    // 0x000530: 0x5C68100001170B0B Fmul
    temp_189 = temp_149 * temp_173;
    // 0x000538: 0xEFF07F800807FF0A Ast
    out_attr0.x = temp_188;
    // 0x000548: 0x5C68100001170005 Fmul
    temp_190 = temp_147 * temp_173;
    // 0x000550: 0xEFF07F800847FF0B Ast
    out_attr0.y = temp_189;
    // 0x000558: 0x49A0040C00271210 Ffma
    temp_191 = fma(temp_133, vp_c3.data[0].z, temp_182);
    // 0x000568: 0xEFF07F800887FF05 Ast
    out_attr0.z = temp_190;
    // 0x000570: 0x49A0040C00270908 Ffma
    temp_192 = fma(temp_186, vp_c3.data[0].z, temp_182);
    // 0x000578: 0x49A0078C00670903 Ffma
    temp_193 = fma(temp_186, vp_c3.data[1].z, temp_178);
    // 0x000588: 0x49A0038C00A70900 Ffma
    temp_194 = fma(temp_186, vp_c3.data[2].z, temp_181);
    // 0x000590: 0x49A006980C87040D Ffma
    temp_195 = fma(temp_154, vp_c6.data[50].x, temp_187);
    // 0x000598: 0x5C68100000571306 Fmul
    temp_196 = temp_184 * temp_190;
    // 0x0005A8: 0x5C68100000A70C04 Fmul
    temp_197 = temp_185 * temp_188;
    // 0x0005B0: 0x5C68100000B70209 Fmul
    temp_198 = temp_183 * temp_189;
    // 0x0005B8: 0x4C58100C00370808 Fadd
    temp_199 = temp_192 + vp_c3.data[0].w;
    // 0x0005C8: 0x49A0078C0067120F Ffma
    temp_200 = fma(temp_133, vp_c3.data[1].z, temp_178);
    // 0x0005D0: 0x4C58100C00371010 Fadd
    temp_201 = temp_191 + vp_c3.data[0].w;
    // 0x0005D8: 0x49A0038C00A7120E Ffma
    temp_202 = fma(temp_133, vp_c3.data[2].z, temp_181);
    // 0x0005E8: 0x59A2030000B70C06 Ffma
    temp_203 = 0.0 - temp_196;
    temp_204 = fma(temp_185, temp_189, temp_203);
    // 0x0005F0: 0x59A2020000570207 Ffma
    temp_205 = 0.0 - temp_197;
    temp_206 = fma(temp_183, temp_190, temp_205);
    // 0x0005F8: 0x59A2048000A7130A Ffma
    temp_207 = 0.0 - temp_198;
    temp_208 = fma(temp_184, temp_188, temp_207);
    // 0x000608: 0x4C58100C00770303 Fadd
    temp_209 = temp_193 + vp_c3.data[1].w;
    // 0x000610: 0x4C68100C02070802 Fmul
    temp_210 = temp_199 * vp_c3.data[8].x;
    // 0x000618: 0x4C68100C02870804 Fmul
    temp_211 = temp_199 * vp_c3.data[10].x;
    // 0x000628: 0x4C68100C02470805 Fmul
    temp_212 = temp_199 * vp_c3.data[9].x;
    // 0x000630: 0x4C58100C00770F0F Fadd
    temp_213 = temp_200 + vp_c3.data[1].w;
    // 0x000638: 0x4C68101802C71010 Fmul
    temp_214 = temp_201 * vp_c6.data[11].x;
    // 0x000648: 0x4C68100C01C70808 Fmul
    temp_215 = temp_199 * vp_c3.data[7].x;
    // 0x000650: 0x5C68100000170606 Fmul
    temp_216 = temp_204 * temp_134;
    // 0x000658: 0x5C68100000170707 Fmul
    temp_217 = temp_206 * temp_134;
    // 0x000668: 0xEFF07F800A07FF06 Ast
    out_attr2.x = temp_216;
    // 0x000670: 0x5C68100000170A0A Fmul
    temp_218 = temp_208 * temp_134;
    // 0x000678: 0xEFF07F800A47FF07 Ast
    out_attr2.y = temp_217;
    // 0x000688: 0x49A0010C02170302 Ffma
    temp_219 = fma(temp_209, vp_c3.data[8].y, temp_210);
    // 0x000690: 0xEFF07F800A87FF0A Ast
    out_attr2.z = temp_218;
    // 0x000698: 0x49A0020C02970301 Ffma
    temp_220 = fma(temp_209, vp_c3.data[10].y, temp_211);
    // 0x0006A8: 0x49A0028C02570305 Ffma
    temp_221 = fma(temp_209, vp_c3.data[9].y, temp_212);
    // 0x0006B0: 0x4C58100C00B70E0E Fadd
    temp_222 = temp_202 + vp_c3.data[2].w;
    // 0x0006B8: 0x49A0081802D70F0F Ffma
    temp_223 = fma(temp_213, vp_c6.data[11].y, temp_214);
    // 0x0006C8: 0xEFF07F800C87FF0E Ast
    out_attr4.z = temp_222;
    // 0x0006D0: 0x4C58100C00B70000 Fadd
    temp_224 = temp_194 + vp_c3.data[2].w;
    // 0x0006D8: 0x49A0040C01D70303 Ffma
    temp_225 = fma(temp_209, vp_c3.data[7].y, temp_215);
    // 0x0006E8: 0x4C98079803070009 Mov
    // 0x0006F0: 0x4C6810180BB70D0D Fmul
    temp_226 = temp_195 * vp_c6.data[46].w;
    // 0x0006F8: 0x49A0079802E70E0F Ffma
    temp_227 = fma(temp_222, vp_c6.data[11].z, temp_223);
    // 0x000708: 0xEFF07F801187FF0D Ast
    out_attr9.z = temp_226;
    // 0x000710: 0x49A0010C02270002 Ffma
    temp_228 = fma(temp_224, vp_c3.data[8].z, temp_219);
    // 0x000718: 0x49A0008C02A70001 Ffma
    temp_229 = fma(temp_224, vp_c3.data[10].z, temp_220);
    // 0x000728: 0x49A0028C02670005 Ffma
    temp_230 = fma(temp_224, vp_c3.data[9].z, temp_221);
    // 0x000730: 0x49A0018C01E70003 Ffma
    temp_231 = fma(temp_224, vp_c3.data[7].z, temp_225);
    // 0x000738: 0x51A0049802F70F0F Ffma
    temp_232 = fma(temp_227, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000748: 0x4C58100C02370202 Fadd
    temp_233 = temp_228 + vp_c3.data[8].w;
    // 0x000750: 0xEFF07F801007FF0F Ast
    out_attr8.x = temp_232;
    // 0x000758: 0x4C58100C02B70101 Fadd
    temp_234 = temp_229 + vp_c3.data[10].w;
    // 0x000768: 0xEFF07F800747FF02 Ast
    gl_Position.y = temp_233;
    // 0x000770: 0x4C58100C02770505 Fadd
    temp_235 = temp_230 + vp_c3.data[9].w;
    // 0x000778: 0xEFF07F8007C7FF01 Ast
    gl_Position.w = temp_234;
    // 0x000788: 0x4C58100C01F70303 Fadd
    temp_236 = temp_231 + vp_c3.data[7].w;
    // 0x000790: 0xEFF07F800787FF05 Ast
    gl_Position.z = temp_235;
    // 0x000798: 0xEFF07F800707FF03 Ast
    gl_Position.x = temp_236;
    // 0x0007A8: 0xE30000000007000F Exit
    return;
}
